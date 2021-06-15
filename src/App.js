
import './App.css';
import TodoHeader from './Component/TodoHeader';
import TodoForm from './Component/TodoForm';
import TodoList from './Component/TodoList';
import TodoListItem from './Component/TodoListItem';

import React, { useState } from 'react';

function App() {

var todoItems = [];
todoItems.push({index: 0, value: "Write your TodoList", done: false});

const [items, setItems] = useState(todoItems);

  function removeItem(itemIndex){
     let list = [...items];
     list.splice(itemIndex,1);
     setItems(list);
    /* setItems(list.filter(e => e.index !== itemIndex));*/
   /* list= list.filter(e => e.index !== itemIndex);*/
   /* console.log(items);*/
  }

  function checkTodoDone(itemIndex){
    let list = [...items];
    let todoDone= list[itemIndex];
    list.splice(itemIndex,1);
    todoDone.done = !todoDone.done;
    todoDone.done ? list.push(todoDone) : list.unshift(todoDone);
    setItems(list);
    console.log(itemIndex);
  }

  function addItem(todoValue){
     let list = [...items];
      const item= {
      index: list.length+1,
      value: todoValue,
      done: false
      };
    list.push(item);
    setItems(list);
}

  return (
    <div className="App">
         <div className="TodoForm">
            <TodoHeader />
            <TodoForm
                addItem= {addItem}
            />
            <TodoList
                Items= {items}
                removeItem={removeItem}
                checkTodoDone ={checkTodoDone}
            />
          </div>
    </div>
  );
}

export default App;
