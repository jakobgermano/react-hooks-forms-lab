import React from "react";
import { v4 as uuid } from "uuid";
import {useState} from 'react'

function ItemForm({onItemFormSubmit}) {
  const [newItem, setNewItem] = useState("")
  const [cat, setCat] = useState("Produce")
  const [name, setName] = useState("")

  function handleNameChange(e){
    console.log(e.target)
    setName(e.target.value)
  }

  function handleCatChange(e){
    console.log(e.target)
    setCat(e.target.value)
  }

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCatChange} value={cat}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
