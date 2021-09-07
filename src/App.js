import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import Main from "./page/Main";
import TopBar from "./components/TopBar";
import Word from "./page/Word";
import MyPage from "./page/MyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={TopBar} />
        <Switch>
          <Route path="/Home" component={Main} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/MyPage" component={MyPage} />
          <Route path="/Word/:keyword" component={Word} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;