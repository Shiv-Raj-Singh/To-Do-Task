
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useReducer, useState } from 'react'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContacPaget'
import TodoPage from "./Pages/Todo";



export const myContext = createContext()

const reducer = (state , action)=>{
    switch(action.type){
        case 'UPDATE':
           return {
             ...state , [action.field] : action.payload ,
           }

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


