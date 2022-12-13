//https://eth-goerli.g.alchemy.com/v2/mCj6BNVvAxUo7V8-RuZ0tW7W4IkRzljk

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/mCj6BNVvAxUo7V8-RuZ0tW7W4IkRzljk",
      accounts: [
        "9e2f5b40e67483cb60a57f6f8bf4ee84d70127aa0c958906923ad4ab7de2e896",
      ],
    },
  },
};
