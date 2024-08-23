import { useEffect, useState } from "react"
// import Form from "./landing_page/Form"

export default function Project() {
    const [users, setUsers] = useState([])
    const [FormValue, setFormValue] = useState({
        name: '', username: '', email: ''
    })
    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                console.log("Data", data)
                setUsers(data)
            })

    }, [])
    const handelsubmit = async (e) => {
        alert(currentId);
        e.preventDefault()
        if (currentId === null) {
            let res = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(FormValue)
            })
            setFormValue({
                name: '', username: '', email: ''
            });
            const data = await res.json();
            console.log('Success:', data);
            setUsers([...users, data]);
        } else {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${currentId}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(FormValue)
            })
            setFormValue({
                name: '', username: '', email: ''
            });
            const response = await res.json()
            setUsers(users.map(data => (data.id === currentId ? response : data)));
        }
    }

    const handelChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...FormValue, [name]: value })
    }

    const handeldelete = (userId) => {
        console.log(userId);
        try {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
                method: 'DELETE'
            })
            setUsers(users.filter(user => (user.id !== userId)))
        }
        catch (e) {
            console.log("error", e)
        }
    }
    const handelEdit = async (data) => {
        console.log(data)
        setFormValue({
            id: data.id,
            name: data.name,
            username: data.username,
            email: data.email
        });
        setCurrentId(data.id);
    }

    return (
        <>
            <form onSubmit={handelsubmit}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="form-control">Name</label>
                        <input type="text" className="form-control" name="name" value={FormValue.name} onChange={handelChange} />
                    </div>
                    <div className="col">
                        <label htmlFor="form-control">UserName</label>
                        <input type="text" className="form-control" name="username" value={FormValue.username} onChange={handelChange} />
                    </div>
                    <div className="col">
                        <label htmlFor="form-control">Email</label>
                        <input type="email" className="form-control" name="email" value={FormValue.email} onChange={handelChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-success" >{currentId ? 'Update' : 'Create'}</button>
                {/* <button className="btn btn-warning" onClick={()=>handelupdate(users)}>Update </button> */}
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user =>
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => handelEdit(user)}>edit</button>
                                    <button className="btn btn-danger" onClick={() => handeldelete(user.id)}>delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}


// import React, { useState, useEffect } from 'react';

// function UserInfo() {
//     const [users, setUsers] = useState([]);
//     const [formData, setFormData] = useState(
//         {
//         first_name: '',
//         last_name: '',
//         email: '',
//         avatar: ''
//     }
// );
//     const [isEditing, setIsEditing] = useState(false);
//     const [currentUserId, setCurrentUserId] = useState(null);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const url = isEditing
//                 ? `https://reqres.in/api/users/${currentUserId}`
//                 : 'https://reqres.in/api/users';

//             const method = isEditing ? 'PUT' : 'POST';

//             const response = await fetch(url, {
//                 method: method,
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             const data = await response.json();
//             console.log('Success:', data);

//             if (isEditing) {
//                 // Update the user in the state
//                 setUsers(users.map(user => user.id === currentUserId ? data : user));
//                 setIsEditing(false);
//                 setCurrentUserId(null);
//             } else {
//                 // Add the new user to the state
//                 setUsers([...users, data]);
//             }

//             setFormData({
//                 first_name: '',
//                 last_name: '',
//                 email: '',
//                 avatar: ''
//             });

//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     // Fetch users data
//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const url= 'https://reqres.in/api/users';
//                 const response = await fetch(url);
//                 console.log('promis data', response);
//                 const res = await response.json();
//                 console.log('resdata-', res.data);
//                 setUsers(res.data);
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//             }
//         };
//         fetchUsers();
//     }, []);

//     const handleEdit = (user) => {
//         setFormData({
//             first_name: user.first_name,
//             last_name: user.last_name,
//             email: user.email,
//             avatar: user.avatar
//         });
//         setIsEditing(true);
//         setCurrentUserId(user.id);
//     };

//     const handleDelete = async (userId) => {
//         try {
//             await fetch(`https://reqres.in/api/users/${userId}`, {
//                 method: 'DELETE',
//             });
//             setUsers(users.filter(user => user.id !== userId));
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>User Form!</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='row'>
//                 <div className="col-6 mb-3">
//                     <label htmlFor="First name" className="form-label">First Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="first_name"
//                         id="first_name"
//                         placeholder="Enter First Name"
//                         value={formData.first_name}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="col-6 mb-3">
//                     <label htmlFor="Last name" className="form-label">Last Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="last_name"
//                         id="last_name"
//                         placeholder="Enter Last name"
//                         value={formData.last_name}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 </div>
//                 <div className='row'>
//                 <div className="col-6 mb-3">
//                     <label htmlFor="email" className="form-label">Email</label>
//                     <input
//                         type="email"
//                         className="form-control"
//                         name="email"
//                         id="email"
//                         placeholder="Enter Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="col-6 mb-3">
//                     <label htmlFor="avatar" className="form-label">Photo</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="avatar"
//                         id="avatar"
//                         placeholder="Enter avatar"
//                         value={formData.avatar}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 </div>
//                 <button type="submit" className="btn btn-primary">{isEditing ? 'Update' : 'Submit'}</button>
//                 <button type="button" className="btn btn-secondary" onClick={() => {
//                     setIsEditing(false);
//                     setFormData({ first_name: '', last_name: '', email: '', avatar:'' });
//                     setCurrentUserId(null);
//                 }}>Cancel</button>
//             </form>

//             <h1>Users</h1>
//             <table className='border w-100'>
//                 <thead className='border'>
//                     <tr className='border'>
//                         <th className='border'>First Name</th>
//                         <th className='border'>Last Name</th>
//                         <th className='border'>Email</th>
//                         <th className='border'>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody className='border'>
//                     {users.map((user) => (
//                         <tr className='border' key={user.id}>
//                             <td className='border'>{user.first_name}</td>
//                             <td className='border'>{user.last_name}</td>
//                             <td className='border'>{user.email}</td>
//                             <td className='border'>
//                                 <button onClick={() => handleEdit(user)}>Edit</button>
//                                 <button onClick={() => handleDelete(user.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default UserInfo;
