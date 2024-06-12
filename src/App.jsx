import "./App.css";
import Router from "./shared/Router";
import GlobalStyle from "./shared/GlobalStyle";
import { useState } from "react";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
