// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Vote {
   uint256 VoteCount;
   
   event Vote(address Voter, address Candidate, uint256 timestamp, string Voterid , string CandidateAadhar);
   
   struct VoteStruct{
      address Voter;
      address Candidate;
      uint256 timestamp;
      string Voterid ;
      string CandidateAadhar;
   
   }

   VoteStruct[] votes;

   function addToBlockChain(address payable Candidate, string memory Voterid, string memory CandidateAadhar) public{
      VoteCount += 1;
      votes.push(VoteStruct(msg.sender, Candidate,block.timestamp,Voterid,CandidateAadhar ));
      
      emit Vote(msg.sender, Candidate, block.timestamp, Voterid, CandidateAadhar);
   }
   
   function gatAllVotes () public view returns(VoteStruct[] memory){
     return votes;
   }
   
   function getVoteCount() public view returns (uint256){
     return VoteCount;
   }
} 