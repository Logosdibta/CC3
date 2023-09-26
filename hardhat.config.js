require("@nomicfoundation/hardhat-toolbox");

const accounts = ["0x..."];//Use your WalletPK

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", //URL of the RPC node for Swisstronik.
      accounts: accounts,
    },
    sepolia: {
      url: "https://rpc.sepolia.org", //URL of the RPC node for Ethereum Sepolia.
      accounts: accounts,
    },
    mumbai: {
      url: "https://polygon-mumbai.blockpi.network/v1/rpc/public", //URL of the RPC node for Polygon Mumbai.
      accounts: accounts,
    },
  },
};

