import "./App.css";
import { useState } from "react";
import Homepage from "./components/homepage/homepage";
import Login from "./components/loginpage/login";
import Register from "./components/registerpage/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [token, setToken] = useState("");
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
