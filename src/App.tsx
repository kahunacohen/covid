import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Screen1 } from "./screens/Screen1";
import { Screen2 } from "./screens/Screen2";
import { Footer } from "./shared/Footer";
import { Header } from "./shared/Header";

function App() {
  return (
    <Router>
      <div className="App container">
        <Header />
        <Switch>
          <Route path="/screen1">
            <Screen1 />
          </Route>
          <Route path="/screen2">
            <Screen2 />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
