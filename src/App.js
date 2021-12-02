import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountiesList from './components/CountriesList';

export default function App() {
  return (
    <div className="App container">
      <Navbar />
      <div className="row">
        <div className="col text-start‚">
          <CountiesList />
        </div>
        <div className="col">
          <Routes>
            <Route path=":id" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
