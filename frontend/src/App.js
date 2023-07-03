import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");

  const handleDeploy = () => {
    console.log("name:", name, "symbol:", symbol);

    axios
      .post("http://localhost:4000/api/contractdata", {
        name: name,
        symbol: name,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleVerify = () => {
    console.log("name:", name, "symbol:", symbol);
  };

  return (
    <>
      <Navbar />
      <div className="card">
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
