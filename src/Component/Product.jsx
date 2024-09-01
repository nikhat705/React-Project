import "./Product.css";

export default function Product(props){
    console.log(props)
    return(
        <div className="product">
       
       <h4> {props.title}</h4>
        <h5>{props.price}</h5>
        </div>
    )
}