import "./login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
    let navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const login = () => {
        axios
            .post("/api/user/auth/login", {
                userName,
                password,
            })
            .then((res) => {
                setErrorMessage("");
                setSuccessMessage(res.data.successMessage);
                setToken(res.data.token);
                navigate("/");
            })
            .catch((err) => {
                setSuccessMessage("");
                setErrorMessage(err.response.data.errorMessage);
            });
    };

    return (
        <div className="login">
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid"
                                alt="Login Page"
                            />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>
                            {errorMessage && (
                                <p className="alert alert-danger" role="alert">
                                    {errorMessage}
                                </p>
                            )}
                            {successMessage && (
                                <p className="alert alert-success" role="alert">
                                    {successMessage}
                                </p>
                            )}
                            <form>
                                <div className="form-outline mb-4">
                                    <input
                                        type="string"
                                        id="user-name"
                                        className="form-control form-control-lg"
                                        placeholder="Enter your User-Name"
                                        value={userName}
                                        onChange={(e) => {
                                            setUserName(e.target.value);
                                        }}
                                    />
                                    <label className="form-label" htmlFor="user-name">
                                        User-Name
                                    </label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                    <label className="form-label" htmlFor="password">
                                        Password
                                    </label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            id="remember"
                                            checked={remember}
                                            onChange={() => setRemember(!remember)}
                                        />
                                        <label className="form-check-label" htmlFor="remember">
                                            Remember me
                                        </label>
                                    </div>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-lg"
                                        style={{
                                            paddingLeft: "2.5rem",
                                            paddingRight: "2.5rem",
                                        }}
                                        onClick={login}
                                    >
                                        Login
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Don't have an account?{" "}
                                        <a href="/register" className="link-danger">
                                            Register
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hello */}
        </div>
    );
};

export default Login;
