import { useEffect, useState } from "react"

export default function Todos(){
   const[Todos,setTodos]=useState([])
   const[formTodo,setFormTodo]=useState({title:''})
   const[currentTodo,setCurrentTodo]=useState(null)

   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response=>response.json())
    .then(json=>{console.log('resonse',json)
        setTodos(json)
    })
   },[])
     const handelsubmit=async(e)=>{
        e.preventDefault();
        if(currentTodo===null){
            const res= await fetch("https://jsonplaceholder.typicode.com/todos",{
                method:'POST',
                headers:{'content-type':'application/json'},
                body: JSON.stringify(formTodo)
            })
            setFormTodo({title:''})
            const response= await res.json()
            console.log('success',response)
            setTodos([...Todos,response])
        } else {
            const res= await fetch(`https://jsonplaceholder.typicode.com/todos/${currentTodo}`,{
                method:'PUT',
                headers:{'content-type':'application/json'},
                body: JSON.stringify(formTodo)
            })
            setFormTodo({title:''})
            const response= await res.json()
            console.log('success',response)
            setTodos(Todos.map(todo=> todo.id === currentTodo ? response: todo)) 
            setCurrentTodo(null)
        }
        setFormTodo({title:''})
       
     }
     const handelchange=(e)=>{
       const{name,value}=e.target;
       setFormTodo({...formTodo,[name]:value})
     }
     const handelEdit =(todo)=>{
       console.log(todo)
       setFormTodo({title:todo.title})
       setCurrentTodo(todo.id)
     }
     const handelDelete=(data)=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${data}`,{
            method:'DELETE' })
            setTodos(Todos.filter(Todo=>(Todo.id !== data)))
     }
           
    
    return(
        <>
        <h1>Todos</h1>
        <form onSubmit={handelsubmit}>
            <div className="row">
                <div className="col">
                <label htmlFor="form-control">TITLE</label>
                <input type="text" className="form-control" name='title' value={formTodo.title} onChange={handelchange}/>
                </div>
                <div className="col">
                
                </div>
            </div>
            
            <button type="submit">{currentTodo ? 'update': 'create'}</button>
        </form>
        <table className="table">
            <thead>
                <tr>
                    <th>HEADING</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {Todos.map((todo=>
                    <tr key={todo.id}>
                        <td>{todo.title}</td>
                        <td>
                            <button className="btn btn-success" onClick={()=>handelEdit(todo,todo.id)}>EDIT</button>
                            <button className="btn btn-danger" onClick={()=>handelDelete(todo.id)}>DELETE</button>
                        </td>
                    </tr>
                ))

                }
            </tbody>
        </table>
        </>
    )
}