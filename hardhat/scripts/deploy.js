// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const BasicDeploymemt = await hre.ethers.getContractFactory("Testing");
  const basicDeploymemt = await BasicDeploymemt.deploy('Testing', 'Test');

  await basicDeploymemt.deployed();

  console.log(
    `Smart Contract Address of Happiness Contract deployed to ${basicDeploymemt.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});