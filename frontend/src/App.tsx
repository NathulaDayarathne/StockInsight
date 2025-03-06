import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";
import Card from "./Components/Card/Card";
import { on } from "events";
import ListPortfolio from "./Components/Portfolio/ListPortfolio/ListPortfolio";


function App() {

   const [search, setSearch] = useState<string>("");
   const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
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

    const onPortfolioCreate = (e: any) => {
      e.preventDefault();
      const exists = portfolioValues.find((value) => value === e.target[0].value);
      if (exists) {
        return;
      }
      const updatedPortfolio = [...portfolioValues, e.target[0].value]; //This creates a new array by copying all existing values from portfolioSearchValues and adding a new value from e.target[0].value.
      setPortfolioValues(updatedPortfolio);
      //console.log(e);

    };
  
  return <div className="App">
    <Search handleSubmit={handleSubmit} search={search} handleChange={handleChange} />
    {serverError && <h1>{serverError}</h1>}

      
    <div className="card-list">
      <ListPortfolio portfolioValues={portfolioValues}/>
        {searchResult.map((company) => (
          <Card
            key={company.symbol}
            companyName={company.name}
            ticker={company.symbol}
            currency={company.currency}
            onPortfolioCreate={onPortfolioCreate}
          />
        ))}
      </div>

    
    <p></p>
  </div>;
}

export default App;






