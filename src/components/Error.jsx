import React from "react";
import "./Error.css";

const Error = ({ message, key }) => {
  return (
    <div className="error-message" key={key}>
      {message}
    </div>
  );
};

export default Error;
