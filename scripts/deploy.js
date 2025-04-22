const VulnerableContract = artifacts.require("VulnerableContract");
const SecureContract = artifacts.require("SecureContract");

module.exports = async function(deployer) {
  await deployer.deploy(VulnerableContract);
  await deployer.deploy(SecureContract);
};
