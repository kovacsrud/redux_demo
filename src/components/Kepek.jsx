import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchKepek } from "../reducers/kepekSlice";


function Kepek() {

    const dispatch =useDispatch();
    const {kepekList,loading,error}=useSelector((state)=>state.kepek);

    useEffect(()=>{
        dispatch(fetchKepek())
    },[dispatch])

  return (
    <div>
        <h1 className="text-2xl font-bold text-center text-blue-600">Képek</h1>
        {loading && <p className="font-bold text-center">Betöltés</p>}
        {error && <p className="font-bold text-center text-red-700">{error}</p>}

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            {kepekList.map((kep)=>(<li key={kep.id}><img src={kep.image} className="m-5"/>
            <p className="text-center">{kep.name}</p></li>))}
        </ul>
    </div>
  )
}

export default Kepek