import axios from "axios"
import { CompanySearch } from "./company";


interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try{
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${"XqX1YHE9piHpmij2812r2rx57u57bRmj"}`
        );

        return data;

    }

    catch(error) {
        if(axios.isAxiosError(error)){
            console.log("error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An expected error has occured.";
        }
    }
}

// export const searchCompanies = async (query: string) => {
//     try {
//       const response = await fetch(
//         `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=5&exchange=NASDAQ&apikey=XqX1YHE9piHpmij2812r2rx57u57bRmj`
//       );
  
//       // Check if the response is okay (status code 200-299)
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       return data;
  
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       return "An unexpected error has occurred.";
//     }
//   };
