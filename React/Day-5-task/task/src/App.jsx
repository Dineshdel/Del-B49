import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TodoInput from './TodoInput.jsx'
import TodoItem from './TodoItem'


function App() {
  const [count, setCount] = useState(0)
  const [todoItems, setTodoItems] = React.useState(
    [{todo: 'Task 1',
    complete: false},
    {todo: 'Task 2',
    complete: false},
    {todo: 'Task 3',
    complete: false}])

    const deleteTodoItem = (index) => {
      const newTodoItems = [...todoItems]
      newTodoItems.splice(index, 1)
      setTodoItems(newTodoItems)
      }

    const createTodoItem = (todo) => {
      const newTodoItems = [...todoItems, { todo, complete: false }];
      setTodoItems(newTodoItems);
      };

      const completeTodoItem = (index) => {
        const newTodoItems = [...todoItems];
        newTodoItems[index].complete === false
        ? (newTodoItems[index].complete = true)
        : (newTodoItems[index].complete = false);
        setTodoItems(newTodoItems)
        };

        const updateTodoItem = (index) => {
          const newTodoItems = [...todoItems];
          const item = newTodoItems[index];
          let newItem = prompt(`Update ${item.todo}?`, item.todo);
          let todoObj = { todo: newItem, complete: false };
          newTodoItems.splice(index, 1, todoObj);
          if (newItem === null || newItem === "") {
          return;
          } else {
          item.todo = newItem;
          }
          setTodoItems(newTodoItems);
          };

  return (
    
     <div className="app">
      <h2>Create TODO</h2>
      <TodoInput createTodoItem={createTodoItem} />
      {todoItems.map((item, index) => (
      
      <TodoItem key={index} index={index} item={item} 
   deleteTodoItem={deleteTodoItem}
   completeTodoItem={completeTodoItem}
   updateTodoItem={updateTodoItem}
   />
))}

    </div>
  )
}

export default App
