import Szamlalo from "./components/Szamlalo";
import Users from "./components/Users";

import Cocktail from "./components/Cocktail"
import Alcohol from "./components/Alcoholism"

import Characters from "./components/Characters";
import Kepek from "./components/Kepek";

import KoktelLista from "./components/KoktelLista";
import RandKoktel from "./components/RandKoktel";

function App() {


  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-blue-700">React Redux</h1>
      <Szamlalo />
      <Users />

      <div className="bg-slate-200">
        <h1 className="text-xl font-bold text-center">Temesi Szabolcs István</h1>
        <Cocktail/>
        <Alcohol/>
      </div>

      <Characters />
      <Kepek />

      <div>
        <h1 className="font-bold text-center">FP</h1>
        <RandKoktel />
        <KoktelLista />
      </div>
    </div>

  )
}

export default App
