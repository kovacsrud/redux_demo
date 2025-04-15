import Szamlalo from "./components/Szamlalo";
import Users from "./components/Users";
import Characters from "./components/Characters";
import Kepek from "./components/Kepek";

function App() {


  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-blue-700">React Redux</h1>
      <Szamlalo />
      <Users />
      <Characters />
      <Kepek />
    </div>

  )
}

export default App
