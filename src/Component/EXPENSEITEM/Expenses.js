import './Expenses.css';
import ExpenseItem from './ExpenseItem';

export default function Expenses(props) {
  return (
    <div className="expenses">
      {
        props.item.map(
          expenses => (
            <ExpenseItem
              date={expenses.date}
              Title={expenses.title}
              amount={expenses.amount} />
          )
        )
      }



    </div>
  )
}