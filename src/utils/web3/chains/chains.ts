const sx_testnet = {
    chainId: 647,
    name: "SX Testnet",
    currency: 'SX',
    rpcUrl: 'https://rpc.toronto.sx.technology/',
    explorerUrl: 'https://explorer.toronto.sx.technology',
}

const sx_mainnet = {
    chainId: 416,
    name: "SX Network",
    currency: 'SX',
    rpcUrl: 'https://rpc.sx.technology/',
    explorerUrl: 'https://explorer.sx.technology',
}

const mainnet = {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com'
}

export const chains = [mainnet, sx_mainnet, sx_testnet]