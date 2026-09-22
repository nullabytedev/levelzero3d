import Header from "./Components/Header"
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import Catalog from "./Pages/Catalog";
import axios from "axios";


function App() {
  
  return(
    <Router>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
