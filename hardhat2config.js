require("@nomiclabs/hardhat-waffle");
//require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },    
     ropsten: {
       url: "https://ropsten.infura.io/v3/projectID",
       accounts: ['0x64-Character-Secret-Key']
     },
    // rinkeby: {
    //   url: "https://rinkeby.infura.io/v3/projectid",
    //   accounts: [process.env.a2key]
    // }
    //dev: {
    //  url: "http://localhost:8545",
    //  gasPrice: 50000000000,
    //  saveDeployments: true,
    //},
  },
  solidity: "0.8.4",
};
