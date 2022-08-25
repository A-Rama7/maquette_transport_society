import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Vehicules from "./pages/Vehicules/Vehicules";
import Map from "./pages/Map/Map";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              
              <Vehicules />
              <Map />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
