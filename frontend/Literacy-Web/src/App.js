import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import Main from "./page/Main";
import TopBar from "./components/TopBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={TopBar} />
        <Switch>
          <Route path="/Home" component={Main} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;