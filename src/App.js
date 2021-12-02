import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router';


function App() {
  return (
      <div className="container">
        <Navbar />
        <div className="left">
      
        <CountriesList/>
        </div>
        <div class="right">
        <Routes>
          <Route path="/countries/:cca3" element={<CountryDetails/>} />
        </Routes>
        </div>
        

    </div>
  );
}

export default App;
