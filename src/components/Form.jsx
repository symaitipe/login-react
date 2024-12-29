import React, { useContext } from "react";
import { HandlingMethods } from "./SubmitHandle";
import "./Form.css";

const Form = () => {
  const { handleSubmit, dispatch } = useContext(HandlingMethods);

  const captureUname = (e) => {
    dispatch({ type: "updateName", payload: e.target.value });
  };

  const capturePassword = (e) => {
    dispatch({ type: "updatePassword", payload: e.target.value });
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="Enter Your Name : "
            onChange={captureUname}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password : "
            onChange={capturePassword}
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Form;
