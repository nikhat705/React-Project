import './ExpenseDate.css';

export default function ExpenseDate(props){
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const year=props.date.getFullYear();
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    return(
        < div className="ExpenseDate">
          
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        
        </div>
    )
}