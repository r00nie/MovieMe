import React, { FC } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";

const App: FC = () => {
  return (
    <Router>
      <Header isHomePage />
    </Router>
  );
};

export default App;
