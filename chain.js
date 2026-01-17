const chain = [];

function saveBlock(block) {
  chain.push(block);
}

function getLastBlock() {
  return chain[chain.length - 1];
}

function getChain() {
  return chain;
}

module.exports = {
  saveBlock,
  getLastBlock,
  getChain
};
