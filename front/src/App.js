import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Vehicules from "./pages/Vehicules/Vehicules";
import Map from "./pages/Map/Map";
import Banner from "./components/Banner/Banner";
import About from "./pages/About/About";

function App() {
  return (
    <div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Navbar/>
              <Banner/>
              <Vehicules/>
              <About/>
              <Map/>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
