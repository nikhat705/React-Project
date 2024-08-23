import { useEffect, useState } from "react"

export default function UserForm() {
    const [posts, setPosts] = useState([]);
    const [postValue, setPostValue] = useState(
        { title: '', body: '' })
  const[currentPost,setcurrentPost]=useState()

    useEffect(() => {
        const getData = async () => {
            const reqData = await fetch("https://jsonplaceholder.typicode.com/posts");
            const Data = await reqData.json();
            console.log("responsedata", Data)
            setPosts(Data);
        }
        getData();
    }, [])
    let handelChange = (e) => {
        const { name, value } = e.target
        setPostValue({ ...postValue, [name]: value })
    }

    let handelSubmit = async (e) => {
        e.preventDefault();
        let resdata = fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(postValue)
        })
        setPostValue({ body: '', title: '' });
        const responseData = await resdata.json();
        setPosts([...posts,responseData])
    }
    let handleDelete = async (userId) => {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`, {
                method: 'DELETE'
            });
            setPosts(posts.filter(post => post.id !== userId))
        } catch (error) {
            console.log('error deleting', error)
        }
    }
    let handleEdit = async (post) =>{
        setPostValue({
         Title:'',body:''
       });
       setcurrentPost(post.id);
      }
    let handelUpdate=async(e)=>{
   try{
    const update= await fetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`,{
        method:'PUT',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(postValue)
    });
    const res= await update.json();
    console.log('update',res);
    setPosts(posts.map(post => (post.id === currentPost ? res:post)))
  setPostValue({title:'',body:''})
   } catch (error){ console.log("error",error)}
    }





    return (
        <>

            <form onSubmit={handelSubmit}>
                <div className="row">
                    <div className="col-6">
                        <label className="form-label"> Title</label>
                        <input type="title" className="form-control" name="title" value={postValue.title} onChange={handelChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label className="form-label"> body</label>
                        <input type="text" className="form-control" name="body" value={postValue.body} onChange={handelChange} />
                    </div>

                </div>
                <button type="submit" className="btn btn-primary mb-2 mt-2">Create</button>
                <button onClick={handelUpdate}>update</button>
                <button type="button" className="btn btn-danger mb-2 mt-2">cancel</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>body</th>

                    </tr>
                </thead>
                <tbody>
                    {posts.map((post =>
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <button className="btn btn-success" onClick={handleEdit}>EditUser</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(post.id)}>delete</button>
                            </td>
                        </tr>
                    ))

                    }

                </tbody>
            </table>

        </>
    )
}