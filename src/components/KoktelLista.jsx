import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {fetchAlapanyag, fetchkoktel} from "../reducers/koktelSlice";
import KoktelCard from "./KoktelCard";

function KoktelLista() {
    const dispatch = useDispatch();
    const {koktelList, alapanyagok, loading, error} = useSelector((state)=>state.koktelok);

        useEffect(()=>{
            dispatch(fetchAlapanyag())
        }, [dispatch]);

        //console.log(koktelList);

    const anyagvaltas = (e) =>{
        const valasztott = e.target.value;
        if(valasztott === ""){
            return;
        }
        dispatch(fetchkoktel(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${valasztott}`))
    };

  return (
    <div>
        <h1 className="text-center font-bold text-3xl">Koktélok listája</h1>
        <div className="flex flex-col items-center justify-center">
            <select onChange={anyagvaltas} className="text-lg border border-gray-300">
                <option value="">-- Válassz alapanyagot --</option>
                    {alapanyagok.map((alapanyag) => (
                    <option key={alapanyag} value={alapanyag}>
                        {alapanyag}
                </option>
                ))}
            </select>
        </div>
        {loading && <p className="font-bold text-center">Betöltés...</p>}
        {error && <p className="font-bold text-center text-red-500">{error}</p>}
        {
            koktelList.map((koktel)=><KoktelCard key={koktel.idDrink} koktel={koktel} />)
        }
    </div>
  )
}

export default KoktelLista