import Award from "./Award";
import Hero from "./Hero";
import Education from "./Education";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAccount from "../../../Component/OpenAccount";
import CreateForm from "../../../Component/CreateForm"
import Form from "../Form";
import AddUser from "../../../Component/AddUser";
import UserInfo from "../../../Component/UserInfo";
import Register from "../../Register";


function HomePage(){
    return(
        <>
        <Register/>
        <CreateForm/>
        <UserInfo/>
         <Form/> 
         <AddUser/>

        <Hero/>
        <Award/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
       
       
        
        </>
    )
}

export default  HomePage;