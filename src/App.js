// App.js
import React from 'react';
import Homepage from './components/Homepage.js';
import UserDashboard from './components/IdeaSubmission/UserDashboard.jsx'
import PanelistDashboard from './components/PanelistDashboard/PanelistDashboard.js'
import UserProfile from './components/UserProfile/UserProfile.jsx';
import JudgesDashboard from './components/JudgesDashboard/JudgesDashboard.js';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Register from './components/Registration/Register.jsx';
import Login from './components/Login/Login.js'

function App() {
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/> 
          <Route path="/userdashboard" element={<UserDashboard/>}/>
          <Route path="/panelistdashboard" element={<PanelistDashboard/>}/>
          <Route path="/userprofile" element={<UserProfile/>}/>
          <Route path="/judgesdashboard" element={<JudgesDashboard/>}/>

        </Routes>
      </Router>

    </div>
    </>
  );
}

export default App;

