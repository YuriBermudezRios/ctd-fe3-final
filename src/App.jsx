
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import { useEffect } from "react";


function App() {
  const location = useLocation()
  const navegation = useNavigate()

  useEffect(() => {
    if(location.pathname === "/"){
      navegation("/home")
    }
  })

  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/favs" element={<Favs />}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
