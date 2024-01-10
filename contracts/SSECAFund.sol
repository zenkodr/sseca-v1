// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

interface ICrowdFunding {
    function createCampaign(string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _image) external returns (uint256);
    function donateToCampaign(uint256 _id) external payable;
    function getDonators(uint256 _id) external view returns (address[] memory, uint256[] memory);
    function getCampaigns(uint256 startIndex, uint256 endIndex) external view returns (CampaignInfo[] memory);
}

struct CampaignInfo {
    address owner;
    string title;
    string description;
    uint256 target;
    uint256 deadline;
    uint256 amountCollected;
    string image;
}

contract CrowdFunding is ICrowdFunding, ReentrancyGuard, Pausable {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
    }

    mapping(uint256 => Campaign) public campaigns;
    mapping(uint256 => address[]) private donators;
    mapping(uint256 => uint256[]) private donations;

    uint256 public numberOfCampaigns = 0;

    event CampaignCreated(uint256 indexed id, address owner, string title, uint256 target, uint256 deadline);
    event DonationReceived(uint256 indexed id, address donor, uint256 amount);

    modifier validCampaign(uint256 _id) {
        require(_id < numberOfCampaigns, "Campaign does not exist.");
        _;
    }

    function createCampaign(string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _image) public override whenNotPaused returns (uint256) {
        require(_deadline > block.timestamp, "The deadline should be a date in the future.");
        require(_target > 0, "The target must be greater than 0");

        Campaign storage campaign = campaigns[numberOfCampaigns];
        campaign.owner = msg.sender;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.image = _image;

        emit CampaignCreated(numberOfCampaigns, msg.sender, _title, _target, _deadline);

        numberOfCampaigns++;

        return numberOfCampaigns - 1;
    }

    function donateToCampaign(uint256 _id) public override payable whenNotPaused nonReentrant validCampaign(_id) {
        uint256 amount = msg.value;
        Campaign storage campaign = campaigns[_id];

        require(block.timestamp <= campaign.deadline, "The campaign is over.");

        campaign.amountCollected += amount;
        donators[_id].push(msg.sender);
        donations[_id].push(amount);

        emit DonationReceived(_id, msg.sender, amount);

        (bool sent,) = payable(campaign.owner).call{value: amount}("");
        require(sent, "Failed to send Ether");
    }

    function getDonators(uint256 _id) public override view validCampaign(_id) returns (address[] memory, uint256[] memory) {
        return (donators[_id], donations[_id]);
    }

    function getCampaigns(uint256 startIndex, uint256 endIndex) public override view returns (CampaignInfo[] memory) {
    require(startIndex < endIndex && endIndex <= numberOfCampaigns, "Invalid index range");

    uint256 range = endIndex - startIndex;
    CampaignInfo[] memory campaignsInfo = new CampaignInfo[](range);

    for(uint256 i = 0; i < range; i++) {
        Campaign storage item = campaigns[startIndex + i];
        campaignsInfo[i] = CampaignInfo(
            item.owner,
            item.title,
            item.description,
            item.target,
            item.deadline,
            item.amountCollected,
            item.image
        );
    }

    return campaignsInfo;
}

    function pause() public whenNotPaused {
        _pause();
    }

    function unpause() public whenPaused {
        _unpause();
    }

    receive() external payable {
        revert("Direct Ether transfers are not allowed.");
    }
}