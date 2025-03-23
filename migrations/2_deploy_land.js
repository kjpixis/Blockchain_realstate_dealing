const Land = artifacts.require("Land");

module.exports = async function(deployer) {
  await deployer.deploy(Land);
};
