// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

contract DonateV3 is ReentrancyGuard, Pausable {
  mapping(address => uint256) private donations;
  address private owner;

  event DonationReceived(address indexed donor, uint256 amount);

  constructor() {
    owner = msg.sender;
  }

  function donate() external payable whenNotPaused nonReentrant {
    require(msg.value > 0, "Donation amount must be greater than zero");
    donations[msg.sender] += msg.value;
    emit DonationReceived(msg.sender, msg.value);
  }

  function getDonation(address donor) external view returns (uint256) {
    return donations[donor];
  }

  function getAllDonators() external view returns (address[] memory) {
    address[] memory donators = new address[](addressCount());
    uint256 index = 0;
    for (uint256 i = 0; i < addressCount(); i++) {
      if (donations[addressAtIndex(i)] > 0) {
        donators[index] = addressAtIndex(i);
        index++;
      }
    }
    return donators;
  }

  function getTotalDonations() external view returns (uint256) {
    uint256 total = 0;
    for (uint256 i = 0; i < addressCount(); i++) {
      total += donations[addressAtIndex(i)];
    }
    return total;
  }

  function addressCount() private view returns (uint256) {
    uint256 count = 0;
    for (uint256 i = 0; i < 256; i++) {
      if (donations[address(uint160(i))] > 0) {
        count++;
      }
    }
    return count;
  }

  function addressAtIndex(uint256 index) private pure returns (address) {
    return address(uint160(uint256(index)));
  }

  fallback() external {
    revert("Fallback function called. Donation failed.");
  }
}
