const hre = require("hardhat");
const ethers = require("ethers");

async function createBytes(args) {
  const name = args[0];
  const bytes = ethers.utils.formatBytes32String(name);
  return bytes;
}

const main = async () => {
  let candidates = [
    "Candidate 1",
    "Candidate 2",
    "Candidate 3",
    "Candidate 4",
    "Candidate 5",
    "Candidate 6",
  ];
  let bytesCandidate = [];
  for (let i = 0; i < candidates.length; i++) {
    const bytecan = createBytes(candidates[i]);
    bytesCandidate.push(bytecan);
  }
  const Votes = await hre.ethers.getContractFactory("Votes");
  const vote = await Votes.deploy(bytesCandidate);

  await vote.deployed();

  console.log("Lock with 1 ETH and deployed to", vote.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
runMain();
