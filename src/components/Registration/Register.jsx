// Register.js

import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import bgimg from "./Background.png";


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const USER1_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;

const Register = () => {
  const navigate = useNavigate();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const errRef = useRef();

  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [dateOfBirth, setDateOfBirth] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [otp, setOtp] = useState("");
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleVerify = async () => {
    try {
      if (otp.length !== 6 || isNaN(otp)) {
        setErrorMessage("OTP must be a 6-digit number.");
        return;
      }

      // Make a POST request to the backend server using Axios to verify the OTP
      const response = await axios.post(
        `/participant/validate-otp?email=${email}&enteredOtp=${otp}`
      );

      if (response.status === 200) {
        // If OTP is valid, perform necessary actions
        console.log("OTP verified successfully!");
        toast.success("Registration successful!");
        setOpen(false);
        setTimeout(() => {
          setSuccess(true);
        }, 5000);
      } else {
        throw new Error("Failed to verify OTP.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error.message);
      toast.error("Registration failed. Please try again.");
      setErrorMessage("Failed to verify OTP. Please try again.");
    }
  };

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidFirstName(USER_REGEX.test(firstName));
  }, [firstName]);

  useEffect(() => {
    setValidLastName(USER1_REGEX.test(lastName));
  }, [lastName]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [firstName, lastName, email, password, matchPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(firstName);
    const v11 = USER1_REGEX.test(lastName);
    const v2 = PWD_REGEX.test(password);
    const v3 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v11 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        "/participant/registration",
        JSON.stringify({ firstName, lastName, dateOfBirth, email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        const errorData = err.response?.data;
        if (errorData?.message === "email already exists") {
          setErrMsg("email already exists");
        } else if (
          errorData?.message ===
          "firstName and lastName combination already exists"
        ) {
          setErrMsg("firstName and lastName combination already exists");
        } else {
          setErrMsg("Registration Failed");
        }
        errRef.current.focus();
      }
    }
  };

  return (
    <div style={{ height: "100vh", backgroundImage: `url(${bgimg})` }}>
      {success ? (
        navigate("/login")
      ) : (
        <>
          <div className="error-container">{/* Error messages */}</div>
          <section>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1 style={{ color: "#ff8400" }}>Register</h1>
            </div>
            <div
              style={{
                margin: "0 auto",
                maxWidth: "600px",
                backgroundColor: "#F9CC91",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <form onSubmit={handleSubmit}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ marginRight: "20px", width: "48%" }}>
                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ fontWeight: "bold" }} htmlFor="firstName">
                        First Name:
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        ref={firstNameRef}
                        autoComplete="off"
                        placeholder="FirstName"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        required
                      />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ fontWeight: "bold" }} htmlFor="dob">
                        Date of Birth:
                      </label>
                      <br></br>
                      <input
                        type="date"
                        id="dob"
                        autoComplete="off"
                        name="date"
                        value={dateOfBirth}
                        onChange={(event) => setDateOfBirth(event.target.value)}
                      />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ fontWeight: "bold" }} htmlFor="password">
                        Password:
                      </label>
                      <br></br>
                      <div>
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          placeholder="Password"
                          required
                        />
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          style={{
                            marginLeft: "5px",
                            padding: "3px 6px",
                            borderRadius: "5px",
                            border: "none",
                            backgroundColor: "#ccc",
                            cursor: "pointer",
                          }}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "48%" }}>
                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ fontWeight: "bold" }} htmlFor="lastName">
                        Last Name:
                      </label>
                      <br></br>
                      <input
                        type="text"
                        id="lastName"
                        ref={lastNameRef}
                        autoComplete="off"
                        placeholder="LastName"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        required
                      />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ fontWeight: "bold" }} htmlFor="email">
                        Email:
                      </label>
                      <br></br>
                      <input
                        type="email"
                        id="email"
                        autoComplete="off"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                      />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <label
                        style={{ fontWeight: "bold" }}
                        htmlFor="confirm_password"
                      >
                        Confirm Password:
                      </label>
                      <input
                        type="password"
                        id="confirm_password"
                        onChange={(e) => setMatchPassword(e.target.value)}
                        value={matchPassword}
                        placeholder="Confirm Password"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <button
                    disabled={
                      !validFirstName ||
                      !validLastName ||
                      !validPassword ||
                      !validMatch
                    }
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#ff8400",
                      color: "white",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Sign Up
                  </button>
                </div>
                <hr></hr>
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  Already registered?{" "}
                  <Link
                    to="/login"
                    style={{ color: "#ff8400", textDecoration: "none" }}
                  >
                    Sign In
                  </Link>
                </div>
              </form>
              <ToastContainer />
            </div>
          </section>
        </>
      )}
      <Dialog open={open}>
        <DialogTitle>Enter OTP to Verify</DialogTitle>
        <DialogContent>
          <input
            type="text"
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
          />
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#ff8400",
              color: "white",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              marginLeft: "10px",
            }}
            onClick={handleVerify}
          >
            Verify
          </button>
          <button
            style={{
              padding: "5px",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              position: "absolute",
              top: "5px",
              right: "5px",
            }}
            onClick={() => setOpen(false)}
          >
            x
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Register;
