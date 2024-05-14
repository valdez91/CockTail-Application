import React,{useEffect, useState} from "react";


const BaseUrl='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

const CockTailBar=()=>{
    const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCocktails = async () => {
          try {
            const response = await fetch(BaseUrl);
            const data = await response.json();
            setCocktails(data.drinks);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching cocktails:', error);
            setLoading(false);
          }
        };
    
        fetchCocktails();
      }, []);
    
      return (
        <div>
          <h1 className="cocktail-header">Popular Margarita Cocktails</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="cocktail">
              {cocktails.map(cocktail => (
                <div key={cocktail.idDrink}>
                  <h2>{cocktail.strDrink}</h2>
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                  <p>{cocktail.strInstructions}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
export default CockTailBar;