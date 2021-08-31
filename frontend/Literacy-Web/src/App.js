import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Test from "./components/Test";
import TestMain from "./components/TestMain";

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