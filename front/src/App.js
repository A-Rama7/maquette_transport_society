import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Vehicules from "./pages/Vehicules/Vehicules";
import Map from "./pages/Map/Map";
import Banner from "./components/Banner/Banner";
import About from "./pages/About/About";
import Ref_specialist from "./pages/Ref_specialist/Ref_specialist";
import Full_service from "./pages/Full_service/Full_service";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar/>
              <Banner/>
              <Vehicules/>
              <About/>
              <Ref_specialist/>
              <Full_service/>
              <Map/>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
