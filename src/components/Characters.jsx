import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCharacters } from "../reducers/characterSlice";


function Characters() {

    const dispatch = useDispatch();
    const {characterList,loading,error}=useSelector((state)=>state.characters);

    useEffect(()=>{
        dispatch(fetchCharacters())
    },[dispatch])

  return (
    <div className="text-center">
        <h1 className="text-2xl font-bold text-center text-blue-400">Karakterek</h1>
        {loading && <p className="font-bold text-center">Betöltés</p>}
        {error && <p className="font-bold text-center text-red-700">{error}</p>}

        <ul>
            {characterList.map((character) => (
      <li key={character.id}>
        {character.name} - {character.species} - {character.status}
      </li>))}
        </ul>
    </div>
  )
}

export default Characters