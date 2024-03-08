// NavigationBar.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserDashboard.css";

import Timer from "./Timer";

// import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap')

function UserDashboard() {
  // const [selectedFiles, setSelectedFiles] = React.useState([]);
  const [setSelectedFiles] = React.useState([]);


  //const [disableTimer, setDisableTimer] = React.useState(false);
 
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
    console.log(files);
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const fileInputRef = React.createRef();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
      }}
    >

      <div
        style={{
          flex: 1,
          backgroundColor: "#FF781699",
          margin: "20px",
          borderRadius: "20px",
          height: "90vh",
          color: "white",
          fontFamily: "Inter",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#F66700",
            fontFamily: "DM Serif Text",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          Idea Submission Form
        </h2>
        <form style={{ marginLeft: "40px", marginRight: "40px" }}>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Idea Title
            </label>
            <input type="text" className="form-control" id="ideaTitle" />
          </div>
          <br />
          <label for="formGroupExampleInput" className="form-label">
            Domain Name
          </label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Select Domain</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <br />
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div>
            <input
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <button className="btn btn-light" onClick={openFileInput}>
              Upload
            </button>
          </div>
          <br />
          <input
            id="submitIdeabtn"
            className="btn"
            type="submit"
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              backgroundColor: "#F66700",
              alignItems: "right",
              width: "100%",
              textAlign: "center",
            }}
            value="Submit"
          />
        </form>
      </div>
      {/* Right Side - Time Left and Status Sections */}
      <div style={{ flex: 1, color: "white" }}>
        <Timer/>
        <div
          style={{
            height: "43.5vh",
            backgroundColor: "#FF781699",
            margin: "20px",
            borderRadius: "20px",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <h2
            style={{
              color: "#F66700",
              fontFamily: "DM Serif Text",
              fontWeight: "400",
              paddingTop: "20px",
            }}
          >
            Status
          </h2>
          <p
            style={{
              fontSize: "30px",
              display: "flex",
              justifyContent: "center",
              position: "relative",
              top: "15%",
              fontFamily: "Inria Sans",
            }}
          >
            Pending Approval
          </p>
        </div>
      </div>
      :
    </div>
  );
}

export default UserDashboard;
