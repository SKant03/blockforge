// scripts/deploy.js
const {ethers} = require("hardhat");
const hre = require("hardhat")

async function main() {
    // We get the contract to deploy
    const Subsidy = await ethers.getContractFactory("Smallsubsudy");

    // Deploy the contract and send 1 Ether to the contract during deployment
    const subsidy = await Subsidy.deploy();

    console.log("Deployment transaction sent");

// Wait for the deployment to complete
    //await subsidy.deployTransaction.wait();
    //console.log("Contract deployed at address:", subsidy.address);
     await subsidy.waitForDeployment();

     console.log("Subsidy contract deployed to:", await subsidy.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
