require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL, // Your Alchemy API URL for Sepolia
      accounts: [process.env.PRIVATE_KEY], // Your account's private key
    },
  },
};
