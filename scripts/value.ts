import { ethers } from "hardhat"

const main = async () => {
    const ReturnValue = await ethers.getContractFactory("ReturnValue")
    const returnV = await ReturnValue.deploy()
    const receipt = await returnV.deployed()

    console.log("==============================\n\n")

    const tx1 = await returnV.setNumber()
    console.log(tx1)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
