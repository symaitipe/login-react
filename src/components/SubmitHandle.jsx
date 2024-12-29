import React, { createContext, useReducer, useState } from "react";

export const HandlingMethods = createContext();

// Initial user state
const initialUser = {
  name: "",
  password: "",
  errorType: "",
  message: "",
};

// Reducer to manage the form state
const reducer = (userstate, action) => {
  switch (action.type) {
    case "updateName":
      return { ...userstate, name: action.payload };

    case "updatePassword":
      return { ...userstate, password: action.payload };

    case "nameOnly":
      return { ...userstate, message: "Name is required" };

    case "passwordOnly":
      return { ...userstate, message: "Password is required" };

    case "nameAndPassword":
      return {
        ...userstate,
        errorType: "both",
        message: "Both name and password are required",
      };

    case "clearError":
      return { ...userstate, message: "", errorType: "" };

    default:
      return userstate;
  }
};

const SubmitHandle = ({ formChild, errorChild }) => {
  const elementsArray = [formChild, errorChild];

  const [user, dispatch] = useReducer(reducer, initialUser);
  const [isName, setIsName] = useState(true);
  const [isPassword, setIsPassword] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.name && !user.password) {
      dispatch({ type: "nameAndPassword" });

      setTimeout(() => {
        dispatch({ type: "clearError" });
      }, 2000);
    } else if (!user.password) {
      dispatch({ type: "passwordOnly" });
      setIsPassword(false);
      setTimeout(() => setIsPassword(true), 2000);
    } else if (!user.name) {
      dispatch({ type: "nameOnly" });
      setIsName(false);
      setTimeout(() => setIsName(true), 2000);
    }
  };

  return (
    <HandlingMethods.Provider value={{ handleSubmit, dispatch }}>
      {elementsArray.map((element, index) => {
        if (index === 0) {
          return <div key={index}>{element}</div>;
        } else if (!isPassword && index === 1) {
          return (
            <div key={index} className="error-message">
              {user.message}
            </div>
          );
        } else if (!isName && index === 1) {
          return (
            <div key={index} className="error-message">
              {user.message}
            </div>
          );
        } else if (user.errorType === "both") {
          return (
            <div key={index} className="error-message">
              {user.message}
            </div>
          );
        } else {
          return null;
        }
      })}
    </HandlingMethods.Provider>
  );
};

export default SubmitHandle;
