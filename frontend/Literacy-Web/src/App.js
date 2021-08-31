import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Test from "./components/Test";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={SignUp} />
      </div>
    </BrowserRouter>
  );
}

export default App;
