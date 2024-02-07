import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import './Search.css';




function Search({ handleSubmit, setInput, setUser, user,input }) {
  const [alertMessage, setAlertMessage] = useState("");

  const handleButtonClick = (selectedUser) => {
    let message = "";
    switch (selectedUser && input!=null) {
      case "farmers":
        message = "Please enter the city before selecting Farmers.";
        break;
      case "EventPlanners":
        message = "Please enter the city before selecting Event Planners.";
        break;
      case "Travelers":
        message = "Please enter the city to check the weather and plan your trip.";
        break;
      default:
        break;
    }
    
    if (message && !alertMessage) {
      setAlertMessage(message);
      return;
    }
    
    setUser(selectedUser);
    setAlertMessage(""); // Reset alert message when selecting other options
  };
  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-lightblue" style={{ backgroundColor: "#2F4F4F", marginBottom: '50px' }}>
      <div className="container">
        <div className="user-buttons">
          <button className={user === "farmers" ? 'selected' : 'notSelected'} onClick={() => handleButtonClick("farmers")}>Farmers</button>
          <button className={user === "EventPlanners" ? 'selected' : 'notSelected'} onClick={() => handleButtonClick("EventPlanners")}>Event Planners</button>
          <button className={user === "Travelers" ? 'selected' : 'notSelected'} onClick={() => handleButtonClick("Travelers")}>Travelers</button>
        </div>
        <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="form-control mr-sm-2 search-input"
            type="text"
            placeholder="Please Enter City name first"
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
}

export default Search;
