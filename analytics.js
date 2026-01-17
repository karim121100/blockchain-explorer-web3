function countBlocks(chain) {
  return chain.length;
}

function countTransactions(chain) {
  let total = 0;
  chain.forEach(b => {
    total += b.transactions.length;
  });
  return total;
}

module.exports = {
  countBlocks,
  countTransactions
};
