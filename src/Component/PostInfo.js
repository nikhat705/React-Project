import { useEffect, useState } from "react"

export default function PostInfo() {
    const [userInfo, setUserInfo] = useState([])
    const [FormInfo, setFormInfo] = useState({
        title: '', body: ''
    })
    const [currentpost, setCurrentPost] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUserInfo(data)
            })
         }, [])
        
    const handelchange = (e) => {
        const { name, value } = e.target;
        setFormInfo({ ...FormInfo, [name]: value })
    }
    const handelsubmit = async (e) => {
        alert(currentpost)
        e.preventDefault();
        if  (currentpost === null){
            const res = await fetch("https://jsonplaceholder.typicode.com/posts/", {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(FormInfo)
            })
            setFormInfo({ title: '', body: '' })
            const response = await res.json()
            console.log('success', response)
            setUserInfo([...userInfo, response])
        } else {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${currentpost}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(FormInfo)
            })
            setFormInfo({ title: '', body: '' })
            const response = await res.json()
            console.log('success', response)
            setUserInfo(userInfo.map(data => (data.id === currentpost ? response : data)))
             setCurrentPost(null)
          }
         setFormInfo({title:'', body:''})
       
    }
    const handeldelete = (postId) => {
        console.log(postId)
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE'
        })
        setUserInfo(userInfo.filter(userInfo => (userInfo.id !== postId)))
    }
   
       
    const handeledit = (post) => {
        console.log(post)
        setFormInfo({
            title: post.title,
            body: post.body
        })
        setCurrentPost(post.id)
    }

    return (
        <>
            <form onSubmit={handelsubmit}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="form-control">Title</label>
                        <input type="text" className="form-control" name="title" value={FormInfo.title} onChange={handelchange} />
                    </div>
                    <div className="col">
                        <label htmlFor="form-control">Body</label>
                        <input type="text" className="form-control" name="body" value={FormInfo.body} onChange={handelchange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">{currentpost ? 'update' : 'create'}</button>
                {/* <button className="btn btn-warning" onClick={() => handelUpdate(userInfo)}>update</button> */}
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>{
                    userInfo.map((userInfo =>
                        <tr key={userInfo.id}>
                            <td>{userInfo.title}</td>
                            <td>{userInfo.body}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => handeledit(userInfo, userInfo.id)}>edit</button>
                                <button className="btn btn-danger" onClick={() => handeldelete(userInfo.id)}>delete</button>
                            </td>
                        </tr>
                    ))
                }

                </tbody>
            </table>
        </>
    )
}