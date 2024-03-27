import React, { useState, useEffect } from "react";

function Profile({ handleLogout }) {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Retrieve logged-in user data from local storage
    const userData = JSON.parse(localStorage.getItem("loggedInUser"));
    if (userData) {
      setLoggedInUser(userData);
    }
  }, []);

  
 
  return (
    <div className="container">
      {loggedInUser ? (
        <div className="container">
          <h2>User Details</h2>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto">
              <h6 className="text-uppercase fw-bold">Name</h6>
              <hr className="mb-4 mt-0" style={{ backgroundColor: "#7c4dff" }} />
              <p className="text-justify">{loggedInUser.Name}</p>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto">
              <h6 className="text-uppercase fw-bold text-center">Phone</h6>
              <hr className="mb-4 mt-0" style={{ backgroundColor: "#7c4dff" }} />
              <p className="d-flex flex-column justify-content-center align-items-center">{loggedInUser.Phone}</p>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto">
              <h6 className="text-uppercase fw-bold text-center">Address</h6>
              <hr className="mb-4 mt-0" style={{ backgroundColor: "#7c4dff" }} />
              <p className="d-flex flex-column justify-content-center align-items-center">{loggedInUser.Address}</p>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto">
              <h6 className="text-uppercase fw-bold text-center">Gender</h6>
              <hr className="mb-4 mt-0" style={{ backgroundColor: "#7c4dff" }} />
              <p className="d-flex flex-column justify-content-center align-items-center">{loggedInUser.Gender}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
}

export default Profile;
