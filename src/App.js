
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState();

  function handleNameChange() {
    const names = [
      "Mariah13",
      "Simone.Collier92",
      "Cindy.Larkin",
      "Gideon_Little78",
      "Lawson_Berge18",
      "Anthony_Harris",
      "Rosanna33",
      "Addison86",
      "Theresa_Robel",
      "Ora29",
      "Darrin.Klein87",
      "Jan_Hansen57"
    ];
    const random = Math.floor(Math.random() * names.length);
    setName(names[random]);
  }

  return (
    <div className="App">
      <h1 className="text">Get New User Name</h1>
      <button className="button" onClick={handleNameChange}>
        Click Here
      </button>
      <p className="text">Username: {name}</p>
    </div>
  );
}

export default App;

