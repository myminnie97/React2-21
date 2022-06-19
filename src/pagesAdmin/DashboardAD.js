import React, { useState } from "react";
import data from "./resumecounthashtags.json";
import './DashboardAD.css'

const Dashboard = () => {
  const [contacts, setContacts] = useState(data);


  return (
    
    <div className="app-container1">
        <h1>Resume Count Hashtags</h1>
      <iframe title="TW - Page 1" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiYzNhYzZhMzEtODJmYy00NjBjLWEyZTUtMjE4Y2E3MWUyODE3IiwidCI6ImU5NGQ1N2FkLWEwYjctNDRjZi04ODNmLWQ3OTg3YTBiZDI0NCIsImMiOjEwfQ%3D%3D&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
    </div>
  );
}

export default Dashboard;
