import React from "react";
import Form from "./components/Form";
import SubmitHandle from "./components/SubmitHandle";
import Error from "./components/Error";

const App = () => {
  return (
    <div>
      <SubmitHandle formChild={<Form />} errorChild={<Error />} />
    </div>
  );
};

export default App;
