require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note spider comfort install clog orange turn'; 
let testAccounts = [
"0xb753a0274b2df428ddfbb04146aef9af1798b71a17b21052a342c3437ee2b168",
"0xd3e68a816131183ff91a1058242a2bc6c538e48290adb78ce37009c9918358e1",
"0x40633a08720cc23bbadf1a3acdf1ffc857286a707f0959223d3503936eba5587",
"0xfe33811f54a839bbe91fd26ef03f8b8d4bd87b71ff85a66859b698ec94181261",
"0xe6e14721946b3fd18e51f24a0039948bc70c2711f4508c73c97b1cd1d87651ae",
"0x90cb7e07c840ed061035a232288051131f2315c42512141bb72cc0c6364d57f1",
"0xdb83ec3004f1361173ff58e310662cf015e5e8dfdffefcd122fbc9b835d51272",
"0xabf48b19b58ce36cd952cf72463985a68ac5b06cb36e46df66e1bef5b37f9785",
"0x41a0c0ac8cc89de9f6d7bcd91a31b0c93bc2a768633295f17153089f48714710",
"0x4dc807fe6931830803bb91d28f4e45f9a143c72aa5a70e418685cd17182ca210"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


