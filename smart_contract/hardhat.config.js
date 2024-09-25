require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
        ganache: {
            url: process.env.HOST_URL,
            accounts: [
              process.env.PRIVATE_KEY, // Replace with one of Ganache's account private keys
                // "0xYOUR_PRIVATE_KEY_2",
                // "0xYOUR_PRIVATE_KEY_3",
                // You can add more keys if needed
            ],
        },
    },
};
