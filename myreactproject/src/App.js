/* eslint-disable react/jsx-no-undef */
import React from "react";
import Contact from "./component/Contact";
import About from "./component/About";
import NavBar from "./component/layouts/NavBar";
import AddUser from "./component/users/AddUser";
import EditUser from "./component/users/EditUser";
import { HashRouter, Routes, Route } from "react-router-dom";
import House from "./component/House";
import AddImage from "./component/users/AddImage";
function App() {
  return (
    <HashRouter>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<House />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/addImage" element={<AddImage />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
