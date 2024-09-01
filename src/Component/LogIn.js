import {  useState } from "react";



export default function Logiin(){
    const [formdata,setformdata]=useState({
        email:'',password:""
    })

  const handleChange=(e)=>{
     const {name,value}=e.target;
     setformdata({...formdata,[name]:value})
  }

    const handlesubmit=async(e)=>{
   e.preventDefault();
      try{
        const response=await fetch("http://localhost:8000/user")
        if (!response.ok){
            throw new Error("response not ok")
        }
        const users = await response.json();
        console.log(users)
        const user = users.find(user=>formdata.email === user.email && formdata.password=== user.password)
        if(user){
            alert("loginnnnn")
        }else{
            alert("loginnnn  failed!")
        }
      } catch (err){
        console.log("error",err)
      }
     
  setformdata({ email:'',password:""})

    }

    return(
        <>
       <form onSubmit={handlesubmit}>
        <div className="row">
            <div className="col-6">
            <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" name="email" value={formdata.email} onChange={handleChange}/>
        
            </div>
            <div className="col-6">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={formdata.password} onChange={handleChange}/>  
            </div>
        
        </div>
        <button type="submit">submit</button>
       </form>
        </>
    )
}