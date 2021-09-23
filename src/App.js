import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Form from "./Components/Form";
import Alert from "./Components/Alert";
import About from "./Components/About";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const removeclassList = () => {
    document.body.classList.remove("primary");
    document.body.classList.remove("secondary");
    document.body.classList.remove("success");
    document.body.classList.remove("warning");
    document.body.classList.remove("danger");
    document.body.classList.remove("light");
    document.body.classList.remove("dark");
  };

  const toggle = () => {
    /*removeclassList();
    document.body.classList.add("bg-" + cls);
    */
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("YOU HAVE REACHED THE LIGHT MODE", "success");
      document.title = "TEXTUTLIS-LIGHT MODE";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("YOU HAVE REACHED THE DARK MODE", "success");
      document.title = "TEXTUTLIS-DARK MODE";
    }
  };

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <Router>
      <div className="App">
        <Navbar mode={mode} toggle={toggle} />
        <Alert alert={alert} />
        <Switch>
          <Route path="/About">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <Form
              showalert={showalert}
              mode={mode}
              heading="TRY THE TEXT CONVERTER TO YOUR CHOICE"
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
