// scripts/deploy.js

async function main() {
    // We get the contract to deploy
    const Subsidy = await ethers.getContractFactory("Subsidy");

    // Deploy the contract and send 1 Ether to the contract during deployment
    const subsidy = await Subsidy.deploy({
        value: ethers.utils.parseEther("1.0") // Sends 1 Ether during deployment
    });

    await subsidy.deployed();

    console.log("Subsidy contract deployed to:", subsidy.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
