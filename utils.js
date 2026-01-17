function shortenHash(hash) {
  return hash.slice(0, 6) + "...";
}

module.exports = {
  shortenHash
};
