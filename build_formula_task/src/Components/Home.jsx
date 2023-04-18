import { useEffect, useState } from "react";




export default function Home({user}){
    
    const state = JSON.parse(localStorage.getItem("User"))
    const [Name , setName] = useState('')

    useEffect(()=>{
        if(state) setName(state.firstName + state.lastName)

    }, [state])
    console.log(state);
    return (
        <>
        <div className="Home">

            <div className="container mt-5"style={{
                textAlign : 'center'
        
            }} >

          {
             Name.length > 0 ? <h3 className="h3" >Welcome {Name} </h3> : <h3 className="h4" >Hey Welcome on our website</h3>
          }

            <button type="button" className="btn btn-primary mt-4" id="btn1" onClick={()=>{
                    let ans = confirm('Are sure want to Clear the Entire Data !')
                     ans && localStorage.clear()
                     setName('')
            }} >Clear</button>
            </div>

        </div>
        </>
    )

}