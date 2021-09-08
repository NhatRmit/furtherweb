import { useState } from "react";

const CoffeeMenu = () => {
    const [coffee, setCoffee] = useState([]);
    const [coffeeName, setCoffeeName] = useState('');
    const [display, setDisplay] = useState('')

    const clear = () => {
        setCoffeeName('')
    }

    const addCoffee = () => {
        setCoffee([
            ...coffee,
            {
                id: coffee.length + 1,
                name: coffeeName
            }
        ])
        clear()
    }

    const displayData = () => {
        !display ? (
            setDisplay(true)
        ) : (
            setDisplay(false)
        )
    } 

    return (  
        <>
            <div>
                <h1>Add New Coffee</h1>
                <input type="text" value={coffeeName} onChange={(e) => setCoffeeName(e.target.value)}/>
                <button onClick={addCoffee}>Add</button>
            </div>

            <div>
                <h1>Coffee Menu</h1>
                <button onClick={displayData}>Display Menu</button>
                {display ? 
                    (
                        coffee.map((c, index) => {
                            return (
                                <li key={index}> {c.id}: {c.name} </li>
                            )
                        })
                    ) : (
                        <div/>
                    )
                }

            </div>
        </>
    );
}
 
export default CoffeeMenu;

// import React, { useEffect, useState } from 'react'

// import './App.css';

// function App() {
//   const [items, setItems] = useState([]);
//   const [itemName, setItemName] = useState("");

//   function addItem() {
//     setItems([
//      ...items,
//       {
//         id: items.length,
//         value: itemName
//       }
//     ]);
//     setItemName("");
//   }

//   function display() {
//     <ul>
//       {items.map(item => (
//         <li key={item.id}>{item.value}</li>
//       ))}
//     </ul>
//   }

//   console.log("data", items)
//   return (
//     <div>
//       <input
//         name="item"
//         type="text"
//         value={itemName}
//         onChange={e => setItemName(e.target.value)}
//       />
//       <button name="add" onClick={addItem}>Add</button>
//       <button name="display" onClick={display}>Display</button>
//     </div>
//   );
// }

// export default App;