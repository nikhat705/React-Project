import {useEffect, useState} from "react";

export default function Register(){
    // const[users,setUsers]=useState()
    const[formValue,setFormValue]=useState({
        FirstName:'',
        LastName:'', 
         Number:'',
        email:'',
        password:'',
        gender:'',
        address:''
    })
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const res =await fetch("http://localhost:8000/user",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body: JSON.stringify(formValue) })
            setFormValue({
                FirstName:'',
                LastName:'', 
                Number:'',
                email:'',
                password:'',
                gender:'',
                address:''})
             const response= await res.json();
             console.log(response) 
            //  setUsers([...users,response])
    }
   
   
      const handleChange=(e)=>{
       const{name,value}=e.target;
       setFormValue({...formValue,[name]:value})
      }   
         

    return(
        <>
        <form onSubmit={handlesubmit}>
        <div className="row">
        <div className="col-6">
            <label htmlFor="form-control">FirstName</label>
            <input type="text" className="form-control" name="FirstName" value={formValue.FirstName} onChange={handleChange} required/>
            </div>   
        <div className="col-6">
        <label htmlFor="form-control">LastName</label>
        <input type="text" className="form-control" name="LastName" value={formValue.LastName} onChange={handleChange} required/>
        </div>
        </div>
        <div className="row">
        <div className="col-6">
        <label htmlFor="form-control">Mobile</label>
        <input type="number" className="form-control" name="Number" value={formValue.Number} onChange={handleChange} required/>
        </div>   
        <div className="col-6">
        <label htmlFor="form-control">Email</label>
        <input type="email" className="form-control" name="email" value={formValue.email} onChange={handleChange}required/>
        </div>
        <label htmlFor="form-control">Password</label>
        <input type="password" className="form-control" name="password" value={formValue.password} onChange={handleChange}required/>
        </div>
        
         <div className="row">
            <div className="col-6">
            <label htmlFor="form-control">address</label>
        <input type="text" className="form-control" name="address" value={formValue.address} onChange={handleChange} required/>
        </div>
           
            </div>
        {/* <div className="col-6">
        <label htmlFor="form-control">gender</label>
        <input type="form-check-input" className="checkbox" name="gender" value={formValue.gender} onChange={handleChange}/>
        </div>   */}
        <div className="col-6">
        <label htmlFor="Form-control">Male</label>
          <input class="form-check-input"
           type="radio"
           id="male"
           name="gender" 
           value="male"
           checked={formValue.gender === "male"}
           onChange={handleChange} required/>
      
         <label htmlFor="Form-control">Female</label>
         <input class="form-check-input"
          type="radio"
           name="gender"
           id="female"
           value="female"
            checked={formValue.gender === "female"} 
            onChange={handleChange} required/>
      
         <label htmlFor="Form-control">TransGender</label>
         <input class="form-check-input"
          type="radio"
        name="gender"
         value={formValue.gender === "transGender"}
             onChange={handleChange} required/> 
      
        {/* <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1"> Male</label>
           <br></br>
          <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1"> FeMale</label>
          <br></br>
          <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1"> Transgender</label> */}
        </div>
       <button type="submit">submit</button>
        </form>
       
        </>
    )
}