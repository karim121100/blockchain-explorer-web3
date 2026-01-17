const { createBlock } = require("./block");
const { addTransaction } = require("./transaction");
const { getChain } = require("./chain");
const { logInfo } = require("./logger");

function startApp() {
  logInfo("Starting Blockchain Explorer");

  addTransaction("0xUser1", "0xUser2", 10);
  const block = createBlock();
  logInfo("New Block Created: " + block.id);

  const chain = getChain();
  logInfo("Blockchain Data:");
  console.log(chain);
}

startApp();
