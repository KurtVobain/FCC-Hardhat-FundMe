require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
// require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("solidity-coverage");
require("hardhat-deploy");

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const SEPOLIA_CHAIN_ID = parseInt(process.env.SEPOLIA_CHAIN_ID);
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: {
        compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            // gasPrice: 130000000000,
        },
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: SEPOLIA_CHAIN_ID,
            blockConfirmations: 6,
        },
    },
    // etherscan: {
    //     apiKey: { sepolia: ETHERSCAN_API_KEY },
    // },
    gasReporter: {
        enabled: false,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
        // token: "MATIC",
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
};
