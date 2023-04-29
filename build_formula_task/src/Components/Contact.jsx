import { useContext, useReducer } from "react"
import { myContext } from "../App"
import { useNavigate } from "react-router-dom"
import { isValidName , isValidPhone , isValidEmail } from "../Validation"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './user.css'

const user = {
    firstName : '' , lastName : '' , email : '' , phone : ''
  }
  
export default function Contact(){

    const Nav = useNavigate()
    const reducer = useContext(myContext)
    const [state , dispatch] = useReducer(reducer , user)

    const handleOnChange = (e)=>{
            dispatch({
                type : 'UPDATE' , field : e.target.name , payload : e.target.value
            })
    }

    const onSubmitForm = (e)=>{
        e.preventDefault()

        if(!isValidName(state.firstName)) toast.error('first name Should be Valid ')
        if(!isValidName(state.lastName)) toast.error('Last name Should be Valid ')

        if(!isValidEmail(state.email))  toast.error(' Email Should be Valid ')
        if(!isValidPhone(state.phone))  toast.error(' Phone Should be Valid ')
        
        // dispatch({type : 'SUBMIt' , payload : state})
        if( isValidName(state.firstName) && isValidName(state.lastName)  && isValidEmail(state.email)  && isValidPhone(state.phone)){
            localStorage.setItem('User' , JSON.stringify(state))
            Nav('/' , {state : state})
        }
    }

    return (
        <>
            <div className="container customForm JoinPage">

            <form className="container mt-2 customForm pt-1" id='customForm' onSubmit={onSubmitForm} >
                    
                    <div className="mb-2 mt-4 field">
                        <input type="text" value={state.firstName} className="form-control input"required placeholder='Enter Your First Name' name="firstName" onChange={handleOnChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-2field  ">
                        <input type="text" value={state.lastName} className="form-control"required placeholder='Enter Your Last Name' name="lastName" onChange={handleOnChange}id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-2 field ">
                        <input type="email" value={state.email} className="form-control" required placeholder='Enter Your Email' name="email" onChange={handleOnChange}id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-2 field ">
                        <input type="tel" value={state.phone} className="form-control" required placeholder='Enter Your Phone' name="phone" onChange={handleOnChange}id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                  
                <button type="submit" className="btn btn-primary" id='btn1' >Submit</button>
            </form>

            </div>
            <ToastContainer/>
        </>
    )

}