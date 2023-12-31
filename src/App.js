import React, { useState } from "react";
import ErrorPopup from "./Error";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false); // New state for error notification

  const handleLogin = () => {
    if (username === "manish" && password === "1234") {
      setLoggedIn(true);
    } else {
      setShowError(true); // Display error notification
    }
  };
  const closeErrorPopup = () => {
    setShowError(false);
  };
  return (
    <div className="App">
      {loggedIn ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "50px",
          }}
        >
          <h2>Welcome</h2>
          <p>Name: xyz</p>
          <p>Father: Xyz</p>
          <p>Mobile: 99999999</p>
          <p>Address: Gurgaon, Hr</p>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "50px",
          }}
        >
          <h2>Login</h2>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button style={{ marginTop: "20px" }} onClick={handleLogin}>
            Login
          </button>

          {showError && <ErrorPopup onClose={closeErrorPopup} />}

        </div>
      )}
    </div>
  );
}

export default App;
