import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";
import Card from "./Components/Card/Card";


function App() {

   const [search, setSearch] = useState<string>("");
   const[searchResult, setSearchResult] = useState<CompanySearch[]>([]);
   const [serverError, setServerError] = useState<string>("");


  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      console.log(e);
    };
  
    const handleSubmit = async (e: SyntheticEvent) => {
      const result = await searchCompanies(search);
      if (typeof result === "string"){
        setServerError(result);  
      } else if (Array.isArray(result.data)){
        setSearchResult(result.data);
      }
      console.log(searchResult);
    };
  
  return <div className="App">
    <Search handleSubmit={handleSubmit} search={search} handleChange={handleChange} />
    {serverError && <h1>{serverError}</h1>}

    <div className="card-list">
        {searchResult.map((company) => (
          <Card
            key={company.symbol}
            companyName={company.name}
            ticker={company.symbol}
            currency={company.currency}
          />
        ))}
      </div>

    
    <p></p>
  </div>;
}

export default App;






