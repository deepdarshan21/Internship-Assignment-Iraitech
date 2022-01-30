import "./App.css";
import { useState } from "react";
import Homepage from "./components/homepage/homepage";
import Login from "./components/loginpage/login";
import Register from "./components/registerpage/register";

function App() {
    const [token, setToken] = useState(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjZiNGI2N2Y5ZjQ2NTcyZDE5OGE0OSIsInVzZXJOYW1lIjoiZGVlcHMyMSIsImlhdCI6MTY0MzU2MDU0NX0.05ugLZdPPq0PXpA6aHnp_JVu450PjkdLxDNKFf2Kis4"
    );
    return (
        <div className="App">
            {token ? <Homepage token={token} setToken={setToken} /> : <Login />}
            {/* <Login /> */}
            {/* <Register /> */}
        </div>
    );
}

export default App;
