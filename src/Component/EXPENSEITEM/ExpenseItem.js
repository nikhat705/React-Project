import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
// import Expenses from './Expense';

export default function ExpenseItem(props){
  

   
    return(
          <Card className='ExpensesItem'>
            <ExpenseDate date={new Date(props.date)} />
            <div> <h3>{props.Title}</h3></div>
            <div>${props.amount}</div>
        
        </Card>
    )}
