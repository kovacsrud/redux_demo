import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCocktail } from "../reducers/cocktailSlice";

function Cockatil() {
  const dispatch = useDispatch();
  const { cocktailList, loading, error } = useSelector(
    (state) => state.cocktail
  );

  useEffect(() => {
    dispatch(fetchCocktail());
  }, [dispatch]);

  return (
    <div >
      <h1 className="text-2xl font-bold text-center text-red-950">Koktél:</h1>
      {loading && <p className="font-bold text-center">Betöltés...</p>}

      {error && <p className="font-bold text-center text-red-500">{error}</p>}
      <ul className="flex items-center justify-center">
        {cocktailList.map((drink) => (
          <div key={drink.idDrink} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={drink.strDrinkThumb} alt={drink.strDrinkThumb} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{drink.strDrink}</h2>
              <p>{drink.strInstructions}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Cockatil;
