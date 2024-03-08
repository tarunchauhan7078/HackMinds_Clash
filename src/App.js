// App.js
import React from 'react';
import Homepage from './components/Homepage.js';
import UserDashboard from './components/IdeaSubmission/UserDashboard.jsx'
import PanelistDashboard from './components/PanelistDashboard/PanelistDashboard.js'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/homepage" element={<Homepage/>}/>
          <Route path="/userdashboard" element={<UserDashboard/>}/>
          <Route path="/panelistdashboard" element={<PanelistDashboard/>}/>
        </Routes>
      </Router>

    </div>
    </>
  );
}

export default App;

