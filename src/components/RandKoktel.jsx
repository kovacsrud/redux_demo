import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {fetchRandomKoktel} from "../reducers/koktelSlice";

function RandKoktel() {
    const dispatch = useDispatch();
    const {randomkoktel, loading, error} = useSelector((state)=>state.koktelok);

    useEffect(()=>{
        dispatch(fetchRandomKoktel());
    }, [dispatch]);
  return (
<div>
    <h1 className="text-center font-bold text-3xl">Random koktél</h1>
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <img className="relative w-40" src={randomkoktel.strDrinkThumb + "/medium"} alt={randomkoktel.strDrink} />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{randomkoktel.Category}</span>
            <div className="flex justify-between">
                <span className="block font-semibold text-xl">{randomkoktel.strDrink}</span>
                <span className="inline-flex items-center justify-center bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none whitespace-nowrap shadow">
                    {randomkoktel.dateModified ?? "Nincs dátum"}
                </span>
            </div>
        </div>
    </div>
</div>
  )
}

export default RandKoktel