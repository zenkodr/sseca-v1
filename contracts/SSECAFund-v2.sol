// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

/**
 * @title FundMe Campaign
 * @notice Creates crowdfunding campaigns allowing people to donate funds
 */
contract FundMe is ReentrancyGuard, Pausable {
  enum CampaignState { Active, Finished, Paused }

  struct Campaign {
    address payable owner;
    string title;
    string description;
    uint256 target;
    uint256 deadline;
    uint256 amountCollected;
    string image;
    CampaignState state;
  }

  mapping(bytes32 => Campaign) public campaigns;
  mapping(bytes32 => mapping(address => uint256)) public donations;

  uint256 public numberOfCampaigns;
  address public immutable owner;

  modifier onlyOwner() {
    require(msg.sender == owner, "Only owner can call this function");
    _;
  }

  event CampaignCreated(bytes32 indexed campaignId);
  event Donated(address indexed donator, uint256 amount, bytes32 campaignId);
  event CampaignDeadlineUpdated(bytes32 indexed campaignId, uint256 newDeadline);
  event CampaignDescriptionUpdated(bytes32 indexed campaignId, string newDescription);
  event CampaignStateChanged(bytes32 indexed campaignId, CampaignState newState);
  event DonationFailed(address indexed donator, uint256 amount, bytes32 campaignId);

  constructor() {
    owner = msg.sender;
  }

  function createCampaign(
    string memory title,
    string memory description,
    uint256 target,
    uint256 deadline,
    string memory image
  ) public onlyOwner whenNotPaused returns (bytes32 campaignId) {
    require(bytes(title).length >= 3, "Invalid title");
    require(bytes(description).length >= 25, "Invalid description");
    require(isValidUrl(image), "Invalid image URL");
    require(target > 0.1 ether, "Invalid target");
    require(deadline > block.timestamp, "Invalid deadline");

    campaignId = keccak256(abi.encodePacked(msg.sender, title, block.timestamp));

    Campaign storage campaign = campaigns[campaignId];
    require(campaign.owner == address(0), "Campaign already exists");

    campaign.owner = payable(msg.sender);
    campaign.title = title;
    campaign.description = description;
    campaign.target = target;
    campaign.deadline = deadline;
    campaign.amountCollected = 0;
    campaign.image = image;
    campaign.state = CampaignState.Active;

    emit CampaignCreated(campaignId);

    numberOfCampaigns++;
  }

  function updateCampaignDeadline(bytes32 campaignId, uint256 newDeadline) public onlyOwner whenNotPaused {
    require(newDeadline > block.timestamp, "Invalid deadline");

    Campaign storage campaign = campaigns[campaignId];
    require(campaign.owner != address(0), "Campaign does not exist");

    campaign.deadline = newDeadline;

    emit CampaignDeadlineUpdated(campaignId, newDeadline);
  }

  function updateCampaignDescription(bytes32 campaignId, string memory newDescription) public onlyOwner whenNotPaused {
    require(bytes(newDescription).length >= 25, "Invalid description");

    Campaign storage campaign = campaigns[campaignId];
    require(campaign.owner != address(0), "Campaign does not exist");

    campaign.description = newDescription;

    emit CampaignDescriptionUpdated(campaignId, newDescription);
  }

  function updateCampaignState(bytes32 campaignId, CampaignState newState) public onlyOwner whenNotPaused {
    Campaign storage campaign = campaigns[campaignId];
    require(campaign.owner != address(0), "Campaign does not exist");
    require(campaign.state != newState, "Campaign is already in the selected state");

    campaign.state = newState;

    emit CampaignStateChanged(campaignId, newState);
  }

  function donateToCampaign(bytes32 campaignId) public payable nonReentrant whenNotPaused {
    require(msg.value > 0, "The amount must be above 0");

    Campaign storage campaign = campaigns[campaignId];
    require(campaign.owner != address(0), "Campaign does not exist");
    require(msg.sender != campaign.owner, "Campaign owner cannot donate");
    require(campaign.state == CampaignState.Active, "Campaign is not active");
    require(block.timestamp <= campaign.deadline, "Campaign deadline has passed");

    campaign.amountCollected += msg.value;
    donations[campaignId][msg.sender] += msg.value;

    (bool success, ) = campaign.owner.call{value: msg.value}("");
    if (!success) {
      emit DonationFailed(msg.sender, msg.value, campaignId);
      revert("Transfer failed");
    }

    emit Donated(msg.sender, msg.value, campaignId);
  }

  function getCampaigns() public view returns (Campaign[] memory allCampaigns) {
    allCampaigns = new Campaign[](numberOfCampaigns);

    uint256 counter = 0;
    for (uint256 i = 0; i < numberOfCampaigns; i++) {
      bytes32 campaignId = keccak256(abi.encodePacked(i));
      if (campaigns[campaignId].owner != address(0)) {
        allCampaigns[counter] = campaigns[campaignId];
        counter++;
      }
    }
  }

  function pause() public onlyOwner {
    _pause();
  }

  function unpause() public onlyOwner {
    _unpause();
  }

  // Helper function to validate URLs
  function isValidUrl(string memory urlString) private pure returns (bool) {
    bytes memory strBytes = bytes(urlString);
    if(strBytes.length == 0) return false;

    // URL must start with http:// or https://
    if (strBytes.length <= 7) return false;
    if (strBytes[0] != 'h' || strBytes[1] != 't' || strBytes[2] != 't' || strBytes[3] != 'p') return false;
    if (strBytes[4] != ':' || strBytes[5] != '/' || strBytes[6] != '/') return false;
    if (strBytes.length > 8 && strBytes[7] == 's') {
      if (strBytes.length <= 8 || strBytes[8] != '/') return false;
    }

    // Further validation can be added as needed
    return true;
  }
}