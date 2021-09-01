import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Test from "./components/Test";
import TestMain from "./page/TestMain";
import Word from "./page/Word";

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