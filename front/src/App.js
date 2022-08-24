import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <div className='triangle'></div> */}
      <Home/>
    </div>
  );
}

export default App;
