import { useState } from "react";

export default function AddUser(){
    const[FormValue,setFormValue]=useState({Id:'',name:'',username:'',email:''})

    const handleChange=(e)=>{
     const{name,value}=e.target;
     setFormValue({...FormValue,[name]:value});
    }
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const allInputValue={
         Id:FormValue.Id,
         name:FormValue.name,
         username:FormValue.username, 
         email:FormValue.email
        }
        let res=await fetch("https://jsonplaceholder.typicode.com/users",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(allInputValue)
        })
       
        console.log(allInputValue)
    }


    return(
        <>
        <div className="container">
            <form onSubmit={handleSubmit}>
            <div className="row">
            <div className="col-6">
            <label className="form-label"> Id</label>
                <input type="number" className="form-control " name="Id" value={FormValue.Id} onChange={handleChange}/>
                </div>
                <div className="col-6"> 
                <label className="form-label"> name</label>
                <input type="text"className="form-control" name="name"  value={FormValue.name} onChange={handleChange}/>
                </div>
            </div>
            <div className="row">
                <div className="col-6"> 
                <label className="form-label"> username</label>
                <input type="text"className="form-control" name="username"  value={FormValue.username} onChange={handleChange}/>
                </div>
                <div className="col-6"> 
                <label className="form-label"> email</label>
                <input type="email"className="form-control" name="email"  value={FormValue.email} onChange={handleChange}/>
                </div>
                
            </div>
           
            <button type="submit" className="btn btn-success mb-2 mt-2">update</button>
            <button type="submit" className="btn btn-danger mb-2 mt-2">cancel</button>
            </form>
        </div>
        </>
    )
}