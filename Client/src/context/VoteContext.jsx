// import React, { useEffect, useState } from "react";
// import { ethers } from "ethers";

// import { contractABI, contractAddress } from "../utils/constants";

// export const VoteContext = React.createContext();

// const { etherum } = window;

// const getEthereumContract = () => {
//   const provider = new ethers.provider.Web3Provider(ethereum);
//   const signer = provider.getSigner();
//   const voteContract = new ethers.Contract(
//     contractAddress,
//     contractABI,
//     signer
//   );
//   console.log({
//     provider,
//     signer,
//     voteContract,
//   });
// };

// export const VoteProvider = ({ children }) => {
//   return <VoteContext.Provider value={{}}>{children}</VoteContext.Provider>;
// };
