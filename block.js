const { GENESIS_DATA } = require('./config')
const cryptoHash = require('./crypto-hash');

class Block {
  constructor({timestamp, lastHash, hash, data}) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  static genesis() {
    return new this(GENESIS_DATA);
  }

  static mineBlock({ lastBlock, data }) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;

    return new this({
      timestamp,
      lastHash,
      data,
      hash: cryptoHash(timestamp, lastHash, data)
    });
  }
}

const block1 = new Block({
  timestamp: '29/09/2019',
  lastHash: 'foo-lastHash',
  hash: 'foo-hash',
  data: 'foo-data'
});

console.log('Block 1:\n', block1);

module.exports = Block;
