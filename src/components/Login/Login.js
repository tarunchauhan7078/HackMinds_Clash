import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import { handleLogin } from "../AxiosConfiguration/BackendData/data";
import limg from "./Lbg.png";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;

const LoginTest = ({ setUserRole }) => {
    const navigate = useNavigate();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [selectedRole, setSelectedRole] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
    }, [password]);

    useEffect(() => {
        setErrMsg('');
    }, [email, password, selectedRole]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userData = await handleLogin(email, password, selectedRole);
            const { role } = userData;
            toast.success('Login Successful');

            setTimeout(() => {
                setSuccess(true);
            }, 5000);

            setUserRole(role);

            switch (selectedRole) {
                case 'Participant':
                    return navigate("/participantdashboard");
                case 'panelist':
                    return navigate("/panelistdashboard");
                case 'judge':
                    return navigate("/judgedashboard");
                default:
                    return (
                        navigate("/logintest"),
                        toast("Please select the role")
                    );
            }
        } catch (err) {
            console.error("Login failed", err);
            toast.error('Login Failed');
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                const errorData = err.response?.data;
                if (errorData?.message === 'email already exists') {
                    setErrMsg('Email already exists');
                } else {
                    setErrMsg('Login Failed');
                }
            }
        }
    };

    return (
        <div style={{ backgroundImage: `url(${limg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px',color:'#ff8400' }}>Login</h1>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '15px', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-grp">
                            <label htmlFor="email">
                                Email:
                                <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
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
                                aria-invalid={validEmail ? "false" : "true"}
                                aria-describedby="enote"
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                            />
                        </div>
                        <br></br>
                        <div className="form-grp">
                            <label htmlFor="password">
                                Password:
                                <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} />
                            </label>
                            <br></br>
                            <div className="pass">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                    aria-invalid={validPassword ? "false" : "true"}
                                    aria-describedby="passwordnote"
                                    onFocus={() => setPasswordFocus(true)}
                                    onBlur={() => setPasswordFocus(false)}
                                />
                                <button onClick={() => setShowPassword(!showPassword)} className="show-password">
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <br></br>
                        <div className="form-grp">
                            <label htmlFor="role">Role:</label>
                            <select
                                id="dropdown"
                                value={selectedRole}
                                onChange={(e) => setSelectedRole(e.target.value)}
                                style={{
                                    backgroundColor: '#f9f9f9',
                                    padding: '8px',
                                    border: '1px solid #ccc',
                                    borderRadius: '10px',
                                    fontSize: '16px',
                                    width: '200px',
                                    cursor: 'pointer'
                                }}
                            >
                                <option value="">Select a role</option>
                                <option value="Participant">Participant</option>
                                <option value="panelist">Panelist</option>
                                <option value="judge">Judge</option>
                            </select>
                        </div>
                        <br></br>
                       <center> <button disabled={!validPassword} className="Sign-up" style={{
                            padding: "10px 20px",
                            backgroundColor: "#ff8400",
                            color: "white",
                            borderRadius: "5px",
                            border: "none",
                            cursor: "pointer",
                          }}>Sign In</button></center>
                    </form>
                    <ToastContainer />
                    <hr />
                    <div className="sso"></div>
                    <div className="signIn"><center>
                        New User? <span className="line"><Link to='/register' style ={{color:'#ff8400'}}>Sign Up</Link></span></center>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginTest;
