import companiesJSON from "./companies.json";
import technologiesJSON from "./technologies.json";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import Navbar from "./components/Navbar";

function App() {
  const [companies, setCompanies] = useState (companiesJSON);
  const [technologies, setTechnologies] = useState (technologiesJSON);
  return (
    <>
    <Navbar />
    <div className="App">
      <h1>LAB | React Stack Tracker</h1>
    </div>
    <Routes>
      <Route path='/' element={<HomePage companies={companies} />} />
      <Route path='/company/:companySlug' element= {<CompanyPage companies={companies} />} />
      <Route path='/tech/:slug' element={<TechnologyPage />} />
    </Routes>
    </>
  );
}

export default App;
