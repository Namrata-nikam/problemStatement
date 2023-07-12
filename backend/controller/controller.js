const Contractmodel = require('../models/contractmodel')
const ethers = require('hardhat')

const getcontractId = async (req, res) => {
    console.log("inside getContractId");
    console.log("the request body is:");
    console.log("name: ",req.body.name);
    console.log("symbol: ",req.body.symbol)
    console.log("contractInstance: " ,ethers)
    const { name,symbol } = req.body

    const contractId = await ethers.ethers.deployContract("TestingContract",{name: name,symbol: symbol})

      await contractId.waitForDeployment();
      console.log("contractId: ",contractId)
      // res.status(200).json({ data: contractId });
    // res.status(500).json({ message: "contract Id not found" });
  
  };

  module.exports = { getcontractId };