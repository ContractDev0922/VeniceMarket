const hre = require('hardhat');
const chalk = require('chalk');
const { ethers, getNamedAccounts, getChainId, deployments } = require("hardhat");
const { deploy } = deployments;
const { expect } = require('chai');

function dim() {
  if (!process.env.HIDE_DEPLOY_LOG) {
    console.log(chalk.dim.call(chalk, ...arguments));
  }
}

function cyan() {
  if (!process.env.HIDE_DEPLOY_LOG) {
    console.log(chalk.cyan.call(chalk, ...arguments));
  }
}

function yellow() {
  if (!process.env.HIDE_DEPLOY_LOG) {
    console.log(chalk.yellow.call(chalk, ...arguments));
  }
}

function green() {
  if (!process.env.HIDE_DEPLOY_LOG) {
    console.log(chalk.green.call(chalk, ...arguments));
  }
}

const main = async () => {
  const [user1, user2] = await ethers.getSigners();
  
  const VeniceMarket = await hre.ethers.getContractFactory('VeniceMarket');
  const NFTVeniceMarket = await VeniceMarket.deploy();

  await NFTVeniceMarket.deployed();
  
  //Consol View
  console.log("***********************************************************************************");
  console.log("user account1:", user1.address);
  console.log("user account2:", user2.address);
  console.log("Account balance:", (await user1.getBalance()).toString());
  console.log("***********************************************************************************\n");
  console.log(`VeniceMarket Contract: `,"\n");
  console.log(`${NFTVeniceMarket.address}`,"\n");
  console.log("***********************************************************************************");
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
