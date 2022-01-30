import "./App.css";
import { useState } from "react";
import Homepage from "./components/homepage/homepage";
import Login from "./components/loginpage/login";
import Register from "./components/registerpage/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [token, setToken] = useState(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjZiNGI2N2Y5ZjQ2NTcyZDE5OGE0OSIsInVzZXJOYW1lIjoiZGVlcHMyMSIsImlhdCI6MTY0MzU2MDU0NX0.05ugLZdPPq0PXpA6aHnp_JVu450PjkdLxDNKFf2Kis4"
    );
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        exect
                        element={
                            token ? (
                                <Homepage token={token} setToken={setToken} />
                            ) : (
                                <Login setToken={setToken} />
                            )
                        }
                    />
                    <Route path="/login" exect element={<Login setToken={setToken} />} />
                    <Route path="/register" exect element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
