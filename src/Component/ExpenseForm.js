import { useState } from 'react';
import React  from "react";
import './ExpenseForm.css';

export default function ExpenseForm(props){
    const[Title,setTitle]=useState('');
    const[Date,setDate]=useState('');
    const[amount,setAmount]=useState('');


    const changeTitle=(evt)=>{
        setTitle(evt.target.value);
    }
    const changeDate=(evt)=>{
        setDate(evt.target.value);
    }
    const changeAmount=(evt)=>{
        setAmount(evt.target.value)
    }
     
    const handelSubmit=(evt)=>{
  evt.preventDefault();

   
  const expenseData={
    title:Title,
    amount:amount,
    date: Date
  }
  props.saveExpenses(expenseData);
  console.log(expenseData);
  setTitle('');
  setDate('');
  setAmount('');
}
    
    return(
        <form onSubmit={handelSubmit}>
            <div className="Form_controls">
                <div className="Form_control">
                    <label>Title</label>
                    <input  type="text"   value={Title} onChange={changeTitle} />
                </div>
                <div className="Form_control">
                    <label>amount</label>
                    <input  type="num" value={amount} min="0.01"  step="0.01" onChange={changeAmount}  />
                </div>
                <div className="Form_control">
                    <label>date</label>
                    <input  type="date" value={Date} onChange={changeDate}  />
                </div>
            </div>
            <div className="actions">
                <button type="submit">add expenses</button>
                </div>
        </form>
        
    )
}