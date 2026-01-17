const pending = [];

function addTransaction(from, to, amount) {
  pending.push({
    from: from,
    to: to,
    amount: amount,
    time: new Date().toISOString()
  });
}

function getPendingTransactions() {
  return pending;
}

function clearPending() {
  pending.length = 0;
}

module.exports = {
  addTransaction,
  getPendingTransactions,
  clearPending
};
