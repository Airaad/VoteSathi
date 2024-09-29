// Importing the Hardhat Runtime Environment
async function main() {
  try {
      // Get the contract factory for Voting
      const Voting = await ethers.getContractFactory("Voting");

      // Candidate names and duration
      const candidateNames = ["Airaad", "Moomin", "Rasik"];
      const durationInMinutes = 90;

      // Deploy the Voting contract with candidate names and voting duration
      console.log("Deploying contract...");
      const votingContract = await Voting.deploy(candidateNames, durationInMinutes);

      // Wait for the contract to be deployed
      await votingContract.waitForDeployment();

      // Output the contract address
      console.log("Contract deployed successfully!");
      console.log("Voting contract deployed to:", votingContract.target); // For ethers.js v6, use 'target' for contract address
  } catch (error) {
      console.error("Error during contract deployment:", error);
  }
}

// Main function to execute the deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error("Error in the main function:", error);
      process.exit(1);
  });



//0x9196cEB7EfE589c1Ce46355807093a7BF2427f3E //deployment address


