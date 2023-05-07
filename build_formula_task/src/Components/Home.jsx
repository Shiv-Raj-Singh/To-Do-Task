import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './user.css'

export default function Home({user}){
    const Nav = useNavigate()    
    const state = JSON.parse(localStorage.getItem("User"))
    const [Name , setName] = useState('')

    useEffect(()=>{
        if(state) setName(state.firstName +" "+ state.lastName)
        else Nav('/profile')
    }, [state])
    console.log(state);

    return (
        <>
        <div className="Home">

            <div className="container mt-5"style={{
                textAlign : 'center'
        
            }} >

          {
             Name.length > 0 ? <h3 id="hd" >Welcome {Name} </h3> : Nav('/profile')
          }

            <button type="button" className="btn btn-primary mt-4" id="btn1" onClick={async ()=>{
                    let ans = confirm('Are sure want to Clear the Entire Data !')
                     ans && localStorage.clear() 
                     console.log('we naviging ');
                     ans && Nav('/profile')
            }} >Clear</button>
            </div>

        </div>
        </>
    )

}