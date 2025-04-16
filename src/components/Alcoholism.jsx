import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAlcohol } from "../reducers/alcoholismSlice";

function Alcohol() {
  const dispatch = useDispatch();
  const { alcoholList, loading, error } = useSelector(
    (state) => state.alcohol
  );

  useEffect(() => {
    dispatch(fetchAlcohol());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-red-950">
        Alkoholos koktélok:
      </h1>
      {loading && <p className="font-bold text-center">Betöltés...</p>}

      {error && <p className="font-bold text-center text-red-500">{error}</p>}
      <ul className="items-center justify-center grid lg:grid-cols-3 sm:grid-cols-2">
        {alcoholList.map((alcohol) => (
          <div key={alcohol.idDrink} className="card bg-base-100 w-96 shadow-sm m-2">
            <figure>
              <img src={alcohol.strDrinkThumb} alt={alcohol.strDrinkThumb} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{alcohol.strDrink}</h2>
              <p>{alcohol.strInstructions}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Alcohol;
