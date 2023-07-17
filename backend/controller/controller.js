const Contractmodel = require('../models/contractmodel')
const deployfile = require('../../Hardhat/scripts/deploy')
const { spawn } = require('child_process');

const getcontractId = async (req, res) => {

    console.log("inside getContractId");
    console.log("the request body is:");
    console.log("name: ",req.body.name);
    console.log("symbol: ",req.body.symbol)

    const { name,symbol } = req.body

    // Execute the hardhat deploy command
    // const deployProcess = spawn('npx', ['hardhat', 'run', deployfile , '--network', 'polygonMumbai']);
  
    const deployProcess = spawn('node',deployfile);
    // Capture the command output and errors
    let output = '';
    let error = '';
  
    deployProcess.stdout.on('data', (data) => {
      output += data.toString();
    });
  
    deployProcess.stderr.on('data', (data) => {
      error += data.toString();
    });
  
    // Handle the command completion
    deployProcess.on('close', (code) => {
      if (code === 0) {
        // res.send({ success: true, output });
        console.log("output: ",output)
      } else {
        // res.send({ success: false, error });
        console.log("error: ",error)
      }
    });
  
  };

  module.exports = { getcontractId };