import { useState,useEffect } from "react"

export default function Comment(){

    const[comments,setComments]=useState([])
    const[formComment,setFormComment]=useState({
        name:'',email:''
    })
    const[currentCommentId,setcurrentCommentId]=useState(null)
     
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response=>response.json())
        .then(data=>{console.log("data",data)
           setComments(data)
        })
    },[])
      const handelchange=(e)=>{
      const{name,value}=e.target;
      setFormComment({
       ...formComment,[name]:value 
      })
      }

      const handelsubmit= async(e)=>{
        e.preventDefault();
        if(currentCommentId === null){
            const res= await fetch("https://jsonplaceholder.typicode.com/comments",{
                method:'POST',
                headers:{'content-type':'application/json'},
                body: JSON.stringify(formComment)
               })
               setFormComment({ name:'',email:''})
               const response=await res.json();
               console.log('response',response)
               setComments([...comments,response])
        } else {
            const res=await fetch(`https://jsonplaceholder.typicode.com/comments/${currentCommentId}`,{
                method:'PUT',
                headers:{'content-type':'application/json'},
                body: JSON.stringify(formComment)
               })
               setFormComment({ name:'',email:''})
               const response=await res.json();
               console.log('response',response)
               setComments(comments.map(data => data.id === currentCommentId ? response : data))
               setcurrentCommentId(null)
              } 
              setFormComment({name:'',email:''})
       
      }
  const handeldelete=(commentId)=>{
   console.log(commentId)
     fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`,{
        method:'DELETE' })
        setComments(comments.filter(Comment=> Comment.id !== commentId))
        
  }
  const handeledit=async(data)=>{
  console.log(data)
   setFormComment({
    name:data.name,
    email:data.email
   })
   setcurrentCommentId(data.id)
  }

    return(
        <>
        <form onSubmit={handelsubmit}>
            <div className="row">
                <div className="col">
                    <label htmlFor="form-control">USERNAME</label>
                    <input type="text" className="form-control" name='name' value={formComment.name} onChange={handelchange} />
                </div>
                <div className="col">
                <label htmlFor="form-control">EMAIL</label>
                <input type="email" className="form-control" name='email' value={formComment.email} onChange={handelchange}/>
                </div>
            </div>
            <button type="submit">{currentCommentId? 'updata' : 'create'}</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>UserName</th>
                    <th>EMAIL</th>
                     <th>action</th>   
                 </tr>
            </thead>
            <tbody>
                {
                    comments.map((comment=>
                       <tr key={comment.id}>
                         <td>{comment.name}</td>
                         <td>{comment.email}</td>
                         <td>
                            <button className="btn btn-success" onClick={()=>handeledit(comment,comment.id)}> Edit</button>
                            <button className="btn btn-danger"  onClick={()=>handeldelete(comment.id)}> DELETE</button>
                         </td>
                       </tr> 
                    ))
                }
            </tbody>
        </table>
        </>
    )
}