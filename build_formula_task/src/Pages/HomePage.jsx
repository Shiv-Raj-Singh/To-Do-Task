import Home from "../Components/Home"
import Navbar from "../Components/Navbar"
import ContactPage from "./ContacPaget";




export default function HomePage(){
    const data = localStorage.getItem('User')
    console.log(data);
    return (
        <>
        {
            data ? <><Navbar/><Home  /> </> : <ContactPage/>
        }
   
        
        </>
    )
}