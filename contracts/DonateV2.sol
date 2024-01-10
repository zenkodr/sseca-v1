// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract DonateV2 is Pausable, ReentrancyGuard {
  address payable public owner;
  uint256 public totalDonations;

  mapping(address => uint256) public donations;

  event DonationReceived(address indexed donator, uint256 amount);

  constructor() {
    owner = payable(msg.sender);
  }

  function donate() external payable whenNotPaused nonReentrant {
    require(msg.value > 0, "Donation amount must be greater than zero");

    donations[msg.sender] += msg.value;
    totalDonations += msg.value;

    emit DonationReceived(msg.sender, msg.value);
  }

  function getDonation(address donator) external view returns (uint256) {
    return donations[donator];
  }

  function getTotalDonations() external view returns (uint256) {
    return totalDonations;
  }

  function withdrawDonations() external whenNotPaused nonReentrant {
    require(msg.sender == owner, "Only the contract owner can withdraw donations");

    uint256 balance = address(this).balance;
    require(balance > 0, "No donations to withdraw");

    owner.transfer(balance);
  }

}
