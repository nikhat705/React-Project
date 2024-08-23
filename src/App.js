import React, { useEffect, useState } from "react";
import Expenses from './Component/Expenses'
import NewExpenses from './Component/NewExpenses'
import './App.css';

let DUMMY_DATA = [
  //     {
  //     id:"e1",
  //     date: new Date(2021,3,24),
  //     Title:'School fee',
  //     amount:700
  // },{
  //     id:"e2",
  //     date: new Date(2021,3,20),
  //     Title:'book price',
  //     amount:200
  // },{ id:"e3",
  //     date: new Date(2021,2,2),
  //     Title:'transport',
  //     amount:600},{
  //         id:"e4",
  //         date: new Date(2021,4,1),
  //         Title:'tution fee',
  //         amount:1000
  //     }
]

export default function App() {
  const [users, setUsers] = useState([]);

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => console.log(users))
  //    setUsers(users);
  // }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
        setUsers(data); // Assuming API response has a 'data' field containing users
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchUsers();
  }, []);

  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const onSaveExpense = (enteredExpensesDataSave) => {
    const Expense = [enteredExpensesDataSave, ...expenses];
    setExpenses(Expense);

  }
  return (
    < div className="App">

      {/* {users.map(user => (
          <li key={user.id}>
            {user.name} {user.email}
          </li>
        ))} */}

      <table className="table table-dark table-striped-columns">
        <thead>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">E-mail id</th>
        </thead>
        <tbody>
          {users.map((user)=>(
              <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}         
        </tbody>
      </table>

      <NewExpenses expensesSave={onSaveExpense} />
      <Expenses item={expenses} />

    </div>

  )
}
