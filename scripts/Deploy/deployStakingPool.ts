import { ethers } from "hardhat"

const main = async () => {
    console.log("\n---------- Deploying StakingPool Contract ----------")

    const StakingToken = "0xda537F79eBda6973D7b5bC4e68C8fe22CEBBeDB1"
    const RewardToken = "0x404fdEd7112Bb4d046283725101eaf8521cB0be6"

    const StakingPool = await ethers.getContractFactory("StakingPool")
    const stakingPool = await StakingPool.deploy(StakingToken, RewardToken)
    const poolReceipt = await stakingPool.deployed()
    const poolAddress = stakingPool.address

    console.log(`\nStakingPool deployed at --> ${poolAddress}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
