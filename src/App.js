import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import AboutMe from "./component/about_me/About_me";
import ContactMe from "./component/contact_me/ContactMe";
import MyPortfolio from "./component/my_portfolio/MyPortfolio";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route element={<Home></Home>} path="/"/>
        <Route element={<Home></Home>} path="/home"/>
        <Route element={<AboutMe/>} path="/about"/>
        <Route element={<ContactMe/>} path="/contact"/>
        <Route element={<MyPortfolio/>} path="/my_portfolio"/>
      </Routes>
    </div>
  );
}

export default App;
