import Szamlalo from "./components/Szamlalo";
import Users from "./components/Users";
import Cocktail from "./components/Cocktail"
import Alcohol from "./components/Alcoholism"

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
    </div>

  )
}

export default App
