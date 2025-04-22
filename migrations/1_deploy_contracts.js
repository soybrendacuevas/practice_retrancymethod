const VulnerableContract = artifacts.require("VulnerableContract");
const SecureContract = artifacts.require("SecureContract");

module.exports = function(deployer) {
  deployer.deploy(VulnerableContract);
  deployer.deploy(SecureContract);
};
