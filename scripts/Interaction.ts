import { ethers } from "hardhat"

const StakingPoolABI = require("../artifacts/contracts/Staking/StakingPool.sol/StakingPool.json")

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const provider = new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL)

const address = "0x22EBd83Ab351b72B3C2256F525739cc015990a14" //StakingPool Address
const stakingPool = new ethers.Contract(address, StakingPoolABI.abi, provider)

const main = async () => {
    const YEAR = await stakingPool.YEAR()
    console.log(YEAR)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
