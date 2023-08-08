import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Contacts from "./screens/Contacts";
import Home from "./screens/Home";
import Header from "./features/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
