import "./homepage.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Homepage = ({ token, setToken }) => {
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        mobile: "",
        address: "",
    });

    useEffect(() => {
        axios
            .get("/api/user", {
                params: {
                    token: token,
                },
            })
            .then((res) => {
                setUserDetails(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [token]);

    const logout=()=>{
        setToken("")
    }

    return (
        <div className="homepage">
            <h3>
                <u>Hello User</u>
            </h3>
            <br />
            <div className="content">
                <p>
                    <b>First-Name: </b>
                    <span>{userDetails.firstName}</span>
                </p>
                <p>
                    <b>Last-Name: </b>
                    <span>{userDetails.lastName}</span>
                </p>
                <p>
                    <b>User-Name: </b>
                    <span>{userDetails.userName}</span>
                </p>
                <p>
                    <b>Email: </b>
                    <span>{userDetails.email}</span>
                </p>
                <p>
                    <b>Mobile: </b>
                    <span>{userDetails.mobile}</span>
                </p>
                <p>
                    <b>Address: </b>
                    <span>{userDetails.address}</span>
                </p>
            </div>
            <button className="btn btn-outline-danger" onClick={logout}>
                Log Out
            </button>
        </div>
    );
};

export default Homepage;
