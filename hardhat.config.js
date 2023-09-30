require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const privateKey = "bd8babaad9e441f43dc95a78143883092799966ebf6d3c6e9e162ce6d7779cac";
const privateKey2 = "3cbb3ecaf6cdbe4ac29770cbbf99eadeb6d1542bd79b799eaee46b80756a2c5c";
const apiKeyForEtherscan = "AKKNR94AFMRDPY98ID8MJ74XNRHYTC4NS3";
const apiKeyForEtherscan1 = "765QYE5RJNFWYZ4UG4W9CUN7FRT6YWQ1B8";
const optimizerEnabled = true;

module.exports = {
  defaultNetwork: "hardhat",
  abiExporter: {
    path: './abis',
    clear: true,
    flat: true,
  },
  etherscan: {
    apiKey: apiKeyForEtherscan1
  },
  gasReporter: {
    currency: 'FTM',
    gasPrice: 100,
    enabled: process.env.REPORT_GAS ? true : false,
  },
  mocha: {
    timeout: 30000,
  },  
  networks: {
    hardhat: {
      chainId: 4002
    },
    fantomtestnet: {
      url: "https://rpc.testnet.fantom.network",
      accounts: [privateKey, privateKey2]
    },
    bsctestnet: {
      url: "https://bsc-testnet.public.blastapi.io",
      accounts: [privateKey, privateKey2]
    }
  },
  solidity: {
    compilers: [
      {
        version: '0.8.10',
        settings: {
          optimizer: {
            enabled: optimizerEnabled,
            runs: 1,
          },
          evmVersion: 'berlin',
        }
      },
      {
        version: '0.8.4',
        settings: {
          optimizer: {
            enabled: optimizerEnabled,
            runs: 1,
          },
          evmVersion: 'berlin',
        }
      },
      {
        version: '0.8.2',
        settings: {
          optimizer: {
            enabled: optimizerEnabled,
            runs: 1,
          },
          evmVersion: 'berlin',
        }
      },
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: optimizerEnabled,
            runs: 1,
          },
          evmVersion: 'berlin',
        }
      },
      {
        version: '0.5.16',
        settings: {
          optimizer: {
            enabled: optimizerEnabled,
            runs: 1,
          },
          evmVersion: 'berlin',
        }
      }
    ]
  }
};

