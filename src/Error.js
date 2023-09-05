import React from "react";

const errorPopupStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "999",
};

const errorContentStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "5px",
  textAlign: "center",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "5px 10px",
  backgroundColor: "#f44336",
  color: "white",
  border: "none",
  borderRadius: "3px",
  cursor: "pointer",
};

const ErrorPopup = ({ onClose }) => {
  return (
    <div style={errorPopupStyle}>
      <div style={errorContentStyle}>
        <p style={{ color: "red" }}>Incorrect login details</p>
        <button style={buttonStyle} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorPopup;
