const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { KENYAN_WEB3__DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the Kenyan Web3 Dev NFT contract that you deployed in the previous module
  const KenyanWeb3DevContract = KENYAN_WEB3__DEVS_NFT_CONTRACT_ADDRESS;

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so cryptoDevsTokenContract here is a factory for instances of our CryptoDevToken contract.
    */
  const cryptoDevsTokenContract = await ethers.getContractFactory(
    "KenyanWeb3DevToken"
  );

  // deploy the contract
  const deployedCryptoDevsTokenContract = await cryptoDevsTokenContract.deploy(
    KenyanWeb3DevContract
  );

  await deployedCryptoDevsTokenContract.deployed();
  // print the address of the deployed contract
  console.log(
    "Kenyan Web3 Dev Token Contract Address:",
    deployedCryptoDevsTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });