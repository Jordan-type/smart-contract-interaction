const Web3 = require("web3");
const bip39 = require("bip39")

//   address: '0xC7db9fe17339F9A023eDf244988f6A7ee3a59984',
//   privateKey: '0x3b87b7cc7b6b734f86946fb3bb5e91f4ef9c59139bf73a461b5f66302c89fe91',
//   dogs cats fox lions ox birds = 0xoooooooiuiyuiy

const web3 = new Web3(
  "https://eth-goerli.g.alchemy.com/v2/25vRsIRqZ-mwiJdFCFPDDb7qRcxgaK6R"
);

// console.log("connected to node", web3)

// get balance

// web3.eth.getBalance("0xeeBdaC75eD53446ED6382C35542cAaC02ddA76e1", (err, wei) => {
//     balance = web3.utils.fromWei(wei, "ether")
//     console.log("balance", balance)
// })

const getWalletBalance = async (_address) => {
  // check if wallet address is valid
  if (!web3.utils.isAddress(_address)) {
    throw new Error("Invalid wallet address");
  }

  // check if wallet address has balance
  const balance = await web3.eth.getBalance(_address);

  return web3.utils.fromWei(balance, "ether");
};

// create wallet address
const createWalletAddress = async () => {
    const wallet = web3.eth.accounts.create();

    console.log(wallet)
    
    return wallet;
}

// createWalletAddress()

const generatePrivateKey = async () => {
    const privateKey = web3.utils.randomHex(32);

    console.log(privateKey)

    return privateKey;
}

// convert privatekey to wallet
const privateKeyToWallet = async (_privateKey) => {
    const wallet = web3.eth.accounts.privateKeyToAccount(_privateKey);

    console.log("private key to wallet", wallet)
}

// generate seed phrase
const generateSeedPhrase = async () => {
    const seedPhrase = bip39.generateMnemonic()
    console.log("seed phrase yetu:", seedPhrase)
}

// generateSeedPhrase()
// satisfy velvet crouch middle renew random sugar claw juice opera camp garden

// convert private key to seed phrase
const privateKeyToSeedPhrase = async (_privateKey) => {
    const seedPhrase = bip39.entropyToMnemonic(_privateKey)

    console.log("private key to seed phrase :",seedPhrase)
}

// privateKeyToSeedPhrase('3b87b7cc7b6b734f86946fb3bb5e91f4ef9c59139bf73a461b5f66302c89fe91')














// privateKeyToWallet('0x3b87b7cc7b6b734f86946fb3bb5e91f4ef9c59139bf73a461b5f66302c89fe92')

// web3.eth.abi
// web3.eth.contract
// web3.eth.accounts

const web3clubsContract = async () => {
    // const contractAddress = "0x7f2b2a9c9d0e1f1a1a1a1a1a1a1a1a1a1a1a1a1a";
    // const abi = 

    // const contract = new web3.eth.Contract(abi, contractAddress);

    // return contract;
}

module.exports = {
  getWalletBalance,
};
