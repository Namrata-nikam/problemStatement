# Hardhat_Basic
 This is a basic hardhat folder which show how to deploy smart contract


<ins>**Steps to follow to execute the code**<ins>

## Installation

After downloading  or cloning the repo, initialize an ` npm ` project run
```
npm install
```
Once it's installed, just run the following command and follow its instructions:

```
Change the `.env.sample` into `.env`
```
Update the APIs in ```.env``` files
```
PRIVATE_KEY=<ADD_YOUR_PRIVATE_KEY_HERE>
POLYGONSCAN_API_KEY=<ADD_YOUR_POLYGON_API_HERE>
POLYGON_TESTNET_URL=https://polygon-mumbai.g.alchemy.com/v2/<ADD_YOUR_API_HERE>
```

Compile the Smart Contract :  
```
npx hardhat compile
```
Deploy the smart contract on polygon testnet :  
``` 
npx hardhat run .\scripts\deploy-happytime.js --network polygonMumbai
```
Update the `SMART_CONTRACT_ADDRESS` and then Verify the smart contract on polygon testnet : 
```
npx hardhat verify --network polygonMumbai SMART_CONTRACT_ADDRESS "Testing" "Test"
```
