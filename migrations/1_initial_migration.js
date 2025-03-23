const Migrations = artifacts.require("Migrations");

module.exports = async function (deployer, network, accounts) {
  console.log('Starting migration...');
  console.log('Network:', network);
  console.log('Accounts:', accounts);
  
  try {
    console.log('Deploying Migrations contract...');
    const instance = await deployer.deploy(Migrations);
    console.log('Migrations deployed at:', instance.address);
  } catch (error) {
    console.error('Deployment error:', error);
    throw error;
  }
};
