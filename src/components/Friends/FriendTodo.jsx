import React, { useEffect } from "react";
import { useState } from "react";
import './FriendTodo.css'

const FriendTodo = () => {
  //State Hook - useState
  const [newItemF, setNewItemF] = useState(""); //Empty String
  const [itemsF, setItemsF] = useState(() => JSON.parse(localStorage.getItem("itemsF")) ||[]); //Empty Array
  
  useEffect(() => {
    localStorage.setItem("itemsF", JSON.stringify(itemsF));
  }, [itemsF]);



  //Helper Functions
  function addItem() {
    if (!newItemF) {
      alert("Enter a Course");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000), // sorting
      value: newItemF,
    };

    setItemsF((oldList) => [...oldList, item]);
    setNewItemF("");
  }

  function deleteItem(id){
    const newArray = itemsF.filter(item => item.id !== id);
    setItemsF(newArray);
  }
  return (
    <div className="friendsTodo-w">
      <input
        className="friends-input"
        type="text"
        placeholder="Add a Friend..."
        value={newItemF}
        onChange={(e) => setNewItemF(e.target.value)}
      />

      <button onClick={() => addItem()}>Add</button>

      <ul>
        {itemsF.map((item) => {
          return (
            <li className="friend-list" key={item.id}>
              {item.value} <button className="friend-deleteBtn" onClick={() => deleteItem(item.id)}>❌</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendTodo;
