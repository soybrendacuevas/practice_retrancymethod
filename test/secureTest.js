const SecureContract = artifacts.require("SecureContract");

contract("SecureContract Test", accounts => {
  it("should not be vulnerable to reentrancy attack", async () => {
    const secureInstance = await SecureContract.deployed();

    await secureInstance.deposit({ from: accounts[0], value: web3.utils.toWei("10", "ether") });

    // Try to attack SecureContract
    try {
      await secureInstance.withdraw(web3.utils.toWei("1", "ether"), { from: accounts[1] });
      assert.fail("Reentrancy attack should not succeed");
    } catch (error) {
      assert(error.message.includes("revert"), "Expected revert error");
    }
  });
});
