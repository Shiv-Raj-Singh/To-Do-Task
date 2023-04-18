
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useReducer, useState } from 'react'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContacPaget'
import TodoPage from "./Pages/Todo";



export const myContext = createContext()

const reducer = (state , action)=>{
    console.log(state);
    // localStorage.setItem('todos' ,  [localStorage.getItem('todos')] ,JSON.stringify(state))
    switch(action.type){
        case 'UPDATE':
          console.log(state);
           return {
             ...state , [action.field] : action.payload ,
           }
           case "ADD_TODO":
            
            return JSON.parse(localStorage.getItem('todos')) ? { todos: [...state.todos, action.payload , JSON.parse(localStorage.getItem('todos')) ] } : {todos: [...state.todos, action.payload ]}
          case "REMOVE_TODO":
            return { todos: state.todos.filter((todo) => todo.id !== action.payload) };
           
          case "TOGGLE_TODO":
          return {
            todos: state.todos.map((todo) => {
              if (todo.id === action.payload) {
                return { ...todo, completed: !todo.completed };
              }
              return todo;
            }),
          }; 
        
          case 'DONE':
            return action.payload

        default:
          return state
    }
}





function App() {
    

  return (
       <>
       <myContext.Provider value={reducer} >
          
          
          <Router>
            <Routes>

            <Route  path="/" element={<HomePage />}    />
            <Route path='/Contact'  element={<ContactPage  />}  />
            <Route path='/Todo'  element={<TodoPage  />}  />

            </Routes>
          </Router>

       </myContext.Provider>
    </>

  )
}

export default App


