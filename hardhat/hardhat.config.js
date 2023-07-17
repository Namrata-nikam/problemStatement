require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require('solidity-coverage');
require("hardhat-gas-reporter");
require('hardhat-storage-layout');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    polygonMumbai: {
      url: process.env.POLYGON_TESTNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY
    }
  }
};
