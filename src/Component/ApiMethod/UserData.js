import { useEffect, useState } from "react"

export default function UserData() {
    const [blogs, setblog] = useState([])
    const [formPost, setFormPost] = useState({
        title: '', body: ''
    })
    const [currentPostId, setCurrentPostId] = useState()

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                console.log("jsonnnn", json)
                setblog(json)
            })
    }, [])

    const handelChange = (e) => {
        const { name, value } = e.target;
        setFormPost({ ...formPost, [name]: value })
    }
    const handelsubmit = async (e) => {
        e.preventDefault();
        let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(formPost)
        });
        setFormPost({
            title: '', body: ''
        });
        const data = await res.json();
        console.log("success", data);
        setblog([...blogs, data]);

    }
    const handeldelete = async (id) => {
        console.log(id)
        try {
            await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE'
            });
            setblog(blogs.filter(post => post.id !== id))
        } catch (error) {
            console.log("deleting error", error)
        }
    }
    const handeledit = async (data) => {
        setFormPost({
            title: data.title,
            body: data.body
        })
        setCurrentPostId(data.id); //currentpostid m set hoga
    }

    const handelUpdate = async (data) => {
        console.log(data)
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${currentPostId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formPost)
            });
            const response = await res.json();
            setblog(blogs.map(data => (data.id === currentPostId ? response : data))); //this will check user.id equal current userid if found replace with data else user
        } catch (error) {
            console.log("deleting error", error)
        }
    }

    return (
        <>
            <form onSubmit={handelsubmit}>
                <div className="row">
                    <div className="col">
                        <label for="form-control">Title</label>
                        <input type="text" class="form-control" name="title" value={formPost.title} onChange={handelChange} />
                    </div>
                    <div className="col">
                        <label for="form-control">Body</label>
                        <input type="text" class="form-control" name="body" value={formPost.body} onChange={handelChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">create</button>
                <button type="button" className="btn btn-warning" onClick={() => handelUpdate(blogs)}>update</button>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((post =>
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => handeledit(post)} >edit</button>
                                <button className="btn btn-danger" onClick={() => handeldelete(post.id)}>delete</button>
                            </td>
                        </tr>
                    ))

                    }

                </tbody>
            </table>
        </>
    )
}