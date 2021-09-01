import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Test from "./components/Test";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import TestMain from "./page/TestMain";
import TopBar from "./components/TopBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={TopBar} />
        <Switch>
          <Route path="/Home" component={TestMain} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
