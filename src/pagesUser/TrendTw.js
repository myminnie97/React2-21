import React, { useState } from "react";
import data from "./dataUpTeamMFU.json";
import './TrendTw.css'


const TrendTw = () => {
  const [contacts, setContacts] = useState(data);

  const [search, setSearch] = React.useState('');

  const handleSearch = (data) => {
    setSearch(data.target.value);
  };

  return (


    <div className="app-container">
      <h1>TREND TWITTER</h1>
      #ทีมมฟล
      

      <table className="table">
        <thead>
          <tr>
            <th className="th1">DATE</th>
            <th className="th1">TEXT</th>
            <th className="th1">HASHTAGS</th>
            <th className="th2">Sentiment Type</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td className="th1">{contact.COL2}</td>
              <td className="th1">{contact.COL3}</td>
              <td className="th1">{contact.COL4}</td>
              <td className="th2">{contact.COL5}</td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrendTw;