
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useReducer, useState } from 'react'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContacPaget'
import TodoPage from "./Pages/Todo";

const games = ['cricket' , 'bollyball' , 'kabbaddi' , 'kho-kho' , 'Tanice' , 'Ludo']
const days = ['weekend' , 'weekdays' , 'everyday' , 'sometimes']


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
    const [game , setGame] = useState('')
    const [day , setDay] = useState('')

    console.log(game , day);
  return (
       <>
       <myContext.Provider value={reducer} >
          
          
          <Router>
            <Routes>

            <Route  path="/" element={<HomePage />}    />
            <Route path='/profile'  element={<ContactPage  />}  />
            <Route path='/Todo'  element={<TodoPage  />}  />

            </Routes>
          </Router>
       </myContext.Provider>
    </>

  )
}

export default App


