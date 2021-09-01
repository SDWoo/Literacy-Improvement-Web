import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Test from "./components/Test";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import TestMain from "./page/TestMain";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={TestMain} />
      </div>
    </BrowserRouter>
  );
}

export default App;
