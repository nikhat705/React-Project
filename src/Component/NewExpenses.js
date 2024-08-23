import React from "react";
import './NewExpenses.css';
 import ExpenseForm from './ExpenseForm';


export default function NewExpenses(props){
     
     const onSaving=(EnteredexpensesData)=>{
        const expenseData={
            ...EnteredexpensesData , 
            id: Math.random().toString()
        }
        props.expensesSave(expenseData)
        console.log(expenseData)
       
     }
  
    return(
    <div className="newExpensess">
       
       
            <ExpenseForm saveExpenses={onSaving}/>  
     
           
        </div>
    )
}