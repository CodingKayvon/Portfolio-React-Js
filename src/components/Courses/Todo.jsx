import React, { useEffect } from "react";
import { useState } from "react";
import './Todo.css'

const Todo = () => {
  //State Hook - useState
  const [newItem, setNewItem] = useState(""); //Empty String
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("items")) || []); //Empty Array
  
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);


  //Helper Functions
  function addItem() {
    if (!newItem) {
      alert("Enter a Course");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000), // sorting
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Add a Course..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>Add</button>

      <ul>
        {items.map((item) => {
          return (
            <li className="course-list" key={item.id}>
              {item.value} <button className="course-deleteBtn" onClick={() => deleteItem(item.id)}>❌</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
