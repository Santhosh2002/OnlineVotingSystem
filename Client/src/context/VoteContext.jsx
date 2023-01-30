import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const VoteContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const voteContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  return voteContract;
};

export const VoteProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [candidate, setCandidate] = useState();
  const [cand_Index, setCand_Index] = useState();
  console.log(candidate);
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      console.log(accounts);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };
  const castyourvote = async () => {
    try {
      if (!ethereum) return alert("Please install methamask");
      const voteContract = getEthereumContract();
      voteContract.vote(cand_Index);
      console.log("Voted");
      winner();
    } catch (error) {
      console.log(error);
    }
  };
  const rightToVote = async () => {
    try {
      checkIfWalletIsConnected();
      const voteContract = getEthereumContract();
      voteContract.giveRightToVote(currentAccount);
    } catch (error) {}
  };
  const votesPerCandidate = async () => {
    try {
      const voteContract = getEthereumContract();
      voteContract.votesPerCandidate();
    } catch (error) {}
  };
  const winner = async () => {
    const voteContract = getEthereumContract();
    console.log(voteContract.winnervotecount());
  };
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <VoteContext.Provider
      value={{
        connectWallet,
        currentAccount,
        candidate,
        setCandidate,
        cand_Index,
        setCand_Index,
        rightToVote,
        checkIfWalletIsConnected,
        castyourvote,
      }}
    >
      {children}
    </VoteContext.Provider>
  );
};
