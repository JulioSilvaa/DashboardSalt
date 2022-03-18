import React from "react";
import GlobalStyle from "./GlobalStyle";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <div className="ContainerApp">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
