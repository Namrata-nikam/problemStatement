const Contractmodel = require('../models/contractmodel')

const getcontractId = (req, res) => {
    console.log("inside getContractId");
    console.log("the request body is:", req.body.name,req.body.symbol);

    const { name,symbol } = req.body

    if(name && symbol)
    {
        const contractId = "abcd123456"
        try {
            const contractmodel = new Contractmodel({ 
              contractId: contractId })
            contractmodel.save()
            res.send(contractmodel)
          } catch (err) {
            console.log(err)
            res.status(500).json({ message: "contractmodel not created" });
          }
    }
  
    res.status(200).json({ message: "get one id store" });
  };

  module.exports = { getcontractId };