import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/UI/AppRouter";
import { Header } from "./pages/fixed/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
