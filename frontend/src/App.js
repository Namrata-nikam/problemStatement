import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const metamaskConnection = async () => {

    console.log("$$$$$$inside metamask connection $$$$$$$$$")

    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => {
          // Return the address of the wallet
          console.log(res[0], "res[0] shown");
          setAddress(res[0]);
        })
        .catch((err) => {
          setErrorMessage(err);
        });
    } else {
      setErrorMessage("install metamask extension!!");
    }
  }

  const handleDeploy = async () => {
    console.log("name:", name, "symbol:", symbol);
    
    metamaskConnection()

    console.log("account address",address);
    if(address){
      axios
      .post("http://localhost:4000/api/contractdata", {
        address: address,
        name: name,
        symbol: name,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error);
      });
    }

  };

  const handleVerify = () => {
    console.log("name:", name, "symbol:", symbol);
  };

  return (
    <>
      <Navbar />
      <div className="card">
        { errorMessage ? <div className="error">
          <label className="label">{errorMessage}</label>
        </div> : ""}
        <div>
          <div>
            <label className="label">Name</label>
          </div>
          <div>
            <input
              className="inputText"
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </div>
        </div>
        <div className="p-input-icon-left">
          <div>
            <label className="label">Symbol</label>
          </div>
          <div>
            <input
              className="inputText"
              type="text"
              onChange={(e) => setSymbol(e.target.value)}
              placeholder="Enter symbol"
            />
          </div>
        </div>
        <button className="btn" onClick={() => handleDeploy()}>
          Deploy
        </button>
        <button className="btn" onClick={() => handleVerify()}>
          Verify
        </button>
      </div>
    </>
  );
}

export default App;
