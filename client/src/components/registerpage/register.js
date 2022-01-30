import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    let navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState();
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [confirm, setConfirm] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const register = () => {
        if (confirm) {
            if (password && password === rePassword) {
                axios
                    .post("/api/user/auth/register", {
                        firstName,
                        lastName,
                        userName,
                        email,
                        mobileNumber,
                        address,
                        password,
                    })
                    .then((res) => {
                        setErrorMessage("");
                        setSuccessMessage(res.data.successMessage);
                        navigate("/login");
                    })
                    .catch((err) => {
                        setSuccessMessage("");
                        setErrorMessage(err.response.data.errorMessage);
                    });
            } else {
                setSuccessMessage("");
                setErrorMessage("Re-enter your password");
                setPassword("");
                setRePassword("");
            }
        } else {
            setSuccessMessage("");
            setErrorMessage("Please check the Confirm button");
        }
    };

    return (
        <div className="register">
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Sign up
                                            </p>

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

                                            <form className="mx-1 mx-md-4">
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            id="first-name"
                                                            className="form-control"
                                                            required
                                                            value={firstName}
                                                            onChange={(e) =>
                                                                setFirstName(e.target.value)
                                                            }
                                                        />
                                                        <label
                                                            className="form-label"
                                                            htmlFor="first-name"
                                                        >
                                                            First-Name
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            id="last-name"
                                                            className="form-control"
                                                            value={lastName}
                                                            onChange={(e) =>
                                                                setLastName(e.target.value)
                                                            }
                                                        />
                                                        <label
                                                            className="form-label"
                                                            htmlFor="last-name"
                                                        >
                                                            Last-Name
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            id="user-name"
                                                            className="form-control"
                                                            required
                                                            value={userName}
                                                            onChange={(e) =>
                                                                setUserName(e.target.value)
                                                            }
                                                        />
                                                        <label
                                                            className="form-label"
                                                            htmlFor="user-name"
                                                        >
                                                            User-Name
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            className="form-control"
                                                            required
                                                            value={email}
                                                            onChange={(e) =>
                                                                setEmail(e.target.value)
                                                            }
                                                        />
                                                        <label
                                                            className="form-label"
                                                            htmlFor="email"
                                                        >
                                                            Email
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="tel"
                                                            id="phone"
                                                            className="form-control"
                                                            required
                                                            value={mobileNumber}
                                                            onChange={(e) =>
                                                                setMobileNumber(e.target.value)
                                                            }
                                                        />
                                                        <label
                                                            className="form-label"
                                                            htmlFor="phone"
                                                        >
                                                            Mobile Number
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            id="address"
                                                            className="form-control"
                                                            value={address}
                                                            onChange={(e) =>
                                                                setAddress(e.target.value)
                                                            }
                                                        />
                                                        <label
                                                            className="form-label"
                                                            htmlFor="address"
                                                        >
                                                            Address
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="password"
                                                            id="password"
                                                            className="form-control"
                                                            value={password}
                                                            onChange={(e) =>
                                                                setPassword(e.target.value)
                                                            }
                                                        />
                                                        <label
                                                            className="form-label"
                                                            htmlFor="password"
                                                        >
                                                            Password
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="password"
                                                            id="re-password"
                                                            className="form-control"
                                                            value={rePassword}
                                                            onChange={(e) =>
                                                                setRePassword(e.target.value)
                                                            }
                                                        />
                                                        <label
                                                            className="form-label"
                                                            htmlFor="re-password"
                                                        >
                                                            Repeat Password
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input
                                                        className="form-check-input me-2"
                                                        type="checkbox"
                                                        value=""
                                                        id="confirm"
                                                        checked={confirm}
                                                        onChange={() => setConfirm(!confirm)}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="confirm"
                                                    >
                                                        I confirm my details
                                                    </label>
                                                </div>

                                                <div className="text-center text-lg-start mt-4 pt-2">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary btn-lg"
                                                        onClick={register}
                                                    >
                                                        Register
                                                    </button>
                                                    <br />
                                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                                        Already have an account?{" "}
                                                        <a href="/login" className="link-danger">
                                                            Login
                                                        </a>
                                                    </p>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid"
                                                alt="register"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
