import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Test from "./components/Test";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Test} />
      </div>
    </BrowserRouter>
  );
}

export default App;
