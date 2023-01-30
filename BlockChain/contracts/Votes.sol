// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

// contract Vote {
//    uint256 VoteCount;
   
//    event Vote(address Voter, address Candidate, uint256 timestamp, string Voterid , string CandidateAadhar);
   
//    struct VoteStruct{
//       address Voter;
//       address Candidate;
//       uint256 timestamp;
//       string Voterid ;
//       string CandidateAadhar;
   
//    }

//    VoteStruct[] votes;

//    function addToBlockChain(address payable Candidate, string memory Voterid, string memory CandidateAadhar) public{
//       VoteCount += 1;
//       votes.push(VoteStruct(msg.sender, Candidate,block.timestamp,Voterid,CandidateAadhar ));
      
//       emit Vote(msg.sender, Candidate, block.timestamp, Voterid, CandidateAadhar);
//    }
   
//    function gatAllVotes () public view returns(VoteStruct[] memory){
//      return votes;
//    }
   
//    function getVoteCount() public view returns (uint256){
//      return VoteCount;
//    }
// } 

// SPDX-Licence-Identifer:  GPL-3.0
contract Votes {

  struct Voter{
   
   uint vote;
   bool Casted;
   uint weight; 
   uint256 VoterAadhar;
  }
  struct Candidate{

  bytes32 name; // name of the candidate
  uint256 CandidateAadhar;
  uint voteCount;
  }
  
  Candidate [] public candidates;
  
  mapping(address => Voter) public voters;
  
  address public Admin;

  constructor(bytes32[] memory candidateDetails) {
     
     Admin = msg.sender;
     voters[Admin].weight=1;
     for(uint i = 0;i < candidateDetails.length; i++ ){
      candidates.push(Candidate({
         name: candidateDetails[i],
         CandidateAadhar: 0,
         voteCount: 0
      }));
     }
  }
  // function authenticate votes
  function giveRightToVote(address voter) public {
     require( msg.sender == Admin, 
              'Only the Admin can give access to vote');
     require(!voters[voter].Casted,
     'Vote has already being casted');
     require(voters[voter].weight == 0);
     
     voters[voter].weight = 1;
  }
  //function for voting
  function vote(uint candidate) public{
     Voter storage sender = voters[msg.sender];
     require(sender.weight != 0, 'Has no right to vote');
     require(!sender.Casted, 'Already voted');
     sender.Casted = true;
     sender.vote = candidate;

     candidates[candidate].voteCount += sender.weight;
     
  }
  //functions for results
  function winningCandidate() public view returns (uint winner){

     uint winningvotecount = 0;
     for(uint i = 0; i < candidates.length; i++){
        if(candidates[i].voteCount> winningvotecount){
           winningvotecount = candidates[i].voteCount;
           winner = i;
        }
     }
  }
  
  function winnerName() public view returns (bytes32 winnername){
     winnername = candidates[winningCandidate()].name;
  }

  function winnervotecount() public view returns (uint count_win){
     count_win = candidates[winningCandidate()].voteCount;
  }
  
//   function draw() public view returns (bytes32[] memory candidateNames){
//      uint wincount = candidates[winningCandidate()].voteCount;
//      for(uint k=0;k<candidates.length;k++){
//       if(candidates[k].voteCount == wincount){
//          for(uint l = 0;l<candidates.length;l++){
//             candidateNames[l] = candidates[k].name;
//          }
//       }
//      }
//   }

  function votesPerCandidate(bytes32 candidate) public view returns (uint count){
     for(uint j = 0;j<candidates.length;j++) {
        if(candidates[j].name == candidate){
           count = candidates[j].voteCount;
        }
     }
  }
}
