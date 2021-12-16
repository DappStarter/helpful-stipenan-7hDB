require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth soccer minor idea clock obscure sword'; 
let testAccounts = [
"0xca9f3523919597cdced2ccc76d3b87b638a3413944267693f20a0f17ee96847d",
"0x4a070dd355f7b3293342245d377f0dd74a79b75dc36883681c2978c089efe8df",
"0x545b3a513a91ad004d1180fb3db0d7ee5447d3384cc2eaf4cc2b581352e9ef78",
"0x26ee00282a5241c556ea5c33ce8a974f5e25360a3edb639dd541303203f65be3",
"0xf8b748c788a1c181b4013fa8044840afe396ceb7e610f3cc56e7dbac3771ed66",
"0xb82b1e18e90637c8d41356150e3dbaeee53fa2c4140df2199ff281c61b913b1b",
"0x7bd31b55fe5dedc10f0bb9c8d9ef38748285bbf59305a88cc0dfc55724dcf9cf",
"0xe64176d8986147cd038f9f7468f9ecb488375f20e4668c5092da768793643e9e",
"0xcbca6b8ba28e0fd1d9388d88d7764b4d82346a3852b11db6bf26fdc99f134f5a",
"0xf031d776c701793cbccbd21445716b45c68300cfe752b0877df9d4dc32b0ba2c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

