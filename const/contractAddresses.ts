/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Mumbai } from '@thirdweb-dev/chains'
export const NETWORK = Mumbai

export const ACTIVE_CHAIN_ID = 'mumbai'

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const CONTRACT_ADDRESS = 'process.env.CONTRACT_ADDRESS'

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS = '0x40F1F4D89646Ec07504C92e28dE6eA5E5bc8d357'
export const NFT_COLLECTION_FOUNDERS = '0x45867ce9FBC025Bb654Dfa0666AbFd0C896a539A'


// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = 'https://mumbai.polygonscan.com'
