import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isOn, setIsOn] = useState(false)

  function handelClick(){
    setIsOn((isOn)=>!isOn)
  }
  const appClass = isOn ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handelClick} style={{appClass}}>
          {isOn ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
