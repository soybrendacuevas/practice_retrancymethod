const VulnerableContract = artifacts.require("VulnerableContract");
const AttackerContract = artifacts.require("AttackerContract");

contract("Reentrancy Test", accounts => {
  it("should drain funds from VulnerableContract", async () => {
    const vulnerableInstance = await VulnerableContract.deployed();
    const attackerInstance = await AttackerContract.new(vulnerableInstance.address, { from: accounts[1] });

    await vulnerableInstance.deposit({ from: accounts[0], value: web3.utils.toWei("10", "ether") });

    const initialBalance = await web3.eth.getBalance(accounts[1]);
    await attackerInstance.attack({ from: accounts[1], value: web3.utils.toWei("1", "ether") });

    const finalBalance = await web3.eth.getBalance(accounts[1]);
    assert(finalBalance > initialBalance, "Attacker balance should have increased");
  });
});
