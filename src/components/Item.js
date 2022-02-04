import React, {useState} from "react";

function Item({ name, category }) {
  const [isOn, setIsOn] = useState(false)

  function handeler(){
    setIsOn((isOn)=>!isOn)
  }
  const cartClass = isOn ? "in-cart" : ""   ;
  const cartLable = isOn ? "Remove from Cart" : "Add to Cart"; 
  const btnClass  = isOn ? "remove" : "add";
  
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={handeler}>{cartLable}</button>
    </li>
  );
}

export default Item;
