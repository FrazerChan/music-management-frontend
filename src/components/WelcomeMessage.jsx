import React from "react";

function WelcomeMessage(props) {
  return (
    <React.Fragment>
      <div className="wave-push align-items-center d-flex">
        <div className="container d-flex justify-content-center">
          <div className="welcome-container">
            <h1 className="text-center text-light welcome-message">
              Welcome to the NextGate interview music management app!
            </h1>
          </div>
        </div>
      </div>
      <div className="wave-container">
        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
          <path
            d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
            style={{ stroke: "none", fill: "#343A40" }}
          ></path>
        </svg>
      </div>
    </React.Fragment>
  );
}

export default WelcomeMessage;
