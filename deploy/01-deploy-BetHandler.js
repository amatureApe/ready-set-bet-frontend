const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");


module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  let args = [];

  console.log("PING", deployer)
  console.log("PING", args)
  console.log("PING", network.config.blockConfirmations)


  const betHandler = await deploy("OO_BetHandler", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1
  });
  console.log("PING4");

  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    log("Verifying...");
    await verify(betHandler.address, args);
  }
  console.log("PING5");


  log("-----------------------")
}

module.exports.tags = ["all", "betHandler"];