import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import AboutMe from "./component/about_me/About_me";
import ContactMe from "./component/contact_me/ContactMe";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route element={<Home></Home>} path="/"/>
        <Route element={<Home></Home>} path="/home"/>
        <Route element={<AboutMe/>} path="/about"/>
        <Route element={<ContactMe/>} path="/contact"/>
      </Routes>
    </div>
  );
}

export default App;
