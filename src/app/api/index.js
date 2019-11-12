var bip39 = require('bip39');
var hdkey = require('hdkey');
var ethUtil = require('ethereumjs-util');
const Web3 = require('web3');
const web3 = new Web3(
  'https://ropsten.infura.io/v3/98a343f00e164c0d9548f968e1792a9c'
);
var Tx = require('ethereumjs-tx');
var abi = require('human-standard-token-abi');

export default class api {
  constructor() {
    this.mnemonic = null;
    this.address = null;
    this.privateKey = null;
  }

  newAccount() {
    const mnemonic = bip39.generateMnemonic();
    var seed = bip39.mnemonicToSeedSync(mnemonic).toString('hex');
    const root = hdkey.fromMasterSeed(Buffer.from(seed, 'hex'));
    const masterPrivateKey = root.privateKey.toString('hex');

    const addrNode = root.derive("m/44'/60'/0'/0/0");
    const pubKey = ethUtil.privateToPublic(addrNode._privateKey);
    const privateKey = addrNode._privateKey.toString('hex');
    const addr = ethUtil.publicToAddress(pubKey).toString('hex');
    const address = ethUtil.toChecksumAddress(addr);

    return {
      address,
      mnemonic,
      privateKey
    };
  }

  // ************************** For Transactions **************

  newTransaction(fromAccount, fromPrivateKey, toAccount, Amount) {
    web3.eth
      .getTransactionCount(fromAccount)
      .then(txCount => {
        console.log('entereededdsddd');
        //define the amount to be sent
        var amount = Amount * 1e18;
        var a = amount.toString();

        const txData = {
          nonce: web3.utils.toHex(txCount),
          gasLimit: web3.utils.toHex(250000),
          gasPrice: web3.utils.toHex(10e9),
          to: toAccount,
          from: fromAccount,
          value: web3.utils.toHex(web3.utils.toWei(a, 'wei'))
        };

        const privateKey = new Buffer.from(fromPrivateKey, 'hex');
        const transaction = new Tx(txData);
        transaction.sign(privateKey);
        const serializedTx = transaction.serialize().toString('hex');

        web3.eth.sendSignedTransaction('0x' + serializedTx, function(
          err,
          transactionHash
        ) {
          if (err) {
            console.log(err['message']);
            throw new CustomError('Error');
          } else {
            return transactionHash;
          }
        });
      })
      .catch(err => {
        console.log('************************');
        console.log(err);
      });
  }

  //******************for token transaction */

  newTransactionToken(
    fromAccount,
    fromPrivateKey,
    toAccount,
    tokenAddress,
    amount
  ) {
    var token = new web3.eth.Contract(abi, tokenAddress, {
      from: fromAccount, // default from address
      gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    });

    web3.eth
      .getTransactionCount(fromAccount)
      .then(txCount => {
        console.log('entered token');
        //define the amount to be sent
        let data = token.methods.transfer(toAccount, amount * 1e18).encodeABI();
        let rawTx = {
          nonce: web3.utils.toHex(txCount),
          gasPrice: '0x3b9aca00',
          gasLimit: web3.utils.toHex(250000),
          to: tokenAddress,
          value: '0x00',
          data: data
        };
        const privateKey = new Buffer.from(fromPrivateKey, 'hex');
        const tx = new Tx(rawTx);
        tx.sign(privateKey);
        const serializedTx = tx.serialize().toString('hex');

        web3.eth.sendSignedTransaction('0x' + serializedTx, function(
          err,
          transactionHash
        ) {
          if (err) {
            throw new CustomError('error');
          } else {
            return transactionHash;
          }
        });
      })
      .catch(err => {
        console.log('************************' + err);
        throw new CustomError('error');
      });
  }

  NEW() {
    return new Promise((resolve, reject) => {
      resolve(this.newAccount());
    });
  }

  SEND(fromAccount, fromPrivateKey, toAccount, amount) {
    return new Promise((resolve, reject) => {
      resolve(
        this.newTransaction(fromAccount, fromPrivateKey, toAccount, amount)
      );
    });
  }

  SEND_TOKENS(fromAccount, fromPrivateKey, toAccount, tokenAddress, amount) {
    return new Promise((resolve, reject) => {
      resolve(
        this.newTransactionToken(
          fromAccount,
          fromPrivateKey,
          toAccount,
          tokenAddress,
          amount
        )
      );
    });
  }

  BALANCE(account) {
    return new Promise((resolve, reject) => {
      resolve(
        web3.eth.getBalance(account).then(data => {
          return data;
        })
      );
    });
  }

  BALANCE_OF(fromAddress, tokenAddress) {
    return new Promise((resolve, reject) => {
      var token = new web3.eth.Contract(abi, tokenAddress, {
        from: fromAddress, // default from address
        gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
      });

      resolve(
        token.methods
          .balanceOf(fromAddress)
          .call()
          .then(function(result) {
            let hi = web3.utils.hexToNumber(result._hex);
            return hi.toString();
          })
      );
    });
  }
}