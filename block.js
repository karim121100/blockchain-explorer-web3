const { getPendingTransactions, clearPending } = require("./transaction");
const { saveBlock, getLastBlock } = require("./chain");

let counter = 1;

function createBlock() {
  const prev = getLastBlock();
  const block = {
    id: counter++,
    previousHash: prev ? prev.hash : "GENESIS",
    transactions: getPendingTransactions(),
    time: new Date().toISOString(),
    hash: "hash_" + Math.random().toString(36).slice(2)
  };

  saveBlock(block);
  clearPending();
  return block;
}

module.exports = {
  createBlock
};
