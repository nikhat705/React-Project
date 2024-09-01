import { useEffect, useState } from "react";
// // import UserForm from "../UserForm";
import PostInfo from "../PostInfo"
import Project from "../ApiMethod/Project"
import Comment from "../Comment";
import Todos from "../Todos";
import Album from "../Todos";

export default function Form() {
//   const [users, setUsers] = useState([]);
//   const [ currentUserId, setCurrentUserId] = useState(null);
//   const [FormValue, setFormValue] = useState(
//     { name: '', username: '', email: '' }
//   );

//   useEffect(() => {
//     const getData = async () => {
//       const reqData = await fetch("https://jsonplaceholder.typicode.com/users");
//       const Data = await reqData.json();
//       console.log("responsedata", Data)
//       setUsers(Data);
//     }
//     getData();
//   }, [])


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValue({ ...FormValue, [name]: value });
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // const allInputValue = {
//     //   name: FormValue.name,
//     //   username: FormValue.username,
//     //   email: FormValue.email
//     // }
//     let res = await fetch("https://jsonplaceholder.typicode.com/users", {
//       method: "POST",
//       headers: { 'content-type': 'application/json' },
//       body: JSON.stringify(FormValue)
//     })
//     setFormValue({
//       name: '', username: '', email: ''
//    });
//     const data = await res.json();
//     console.log('Success:', data);
//     setUsers([...users, data]);
// }

// let handleDelete = async (userId) => {
//   console.log(userId);
//   try {
//      await fetch(`https://reqres.in/api/users/${userId}`, {
//         method: 'DELETE',
//      });
//      setUsers(users.filter(user => user.id !== userId));
//   } catch (error) {
//      console.error('Error deleting user:', error);
//   }
// };

// let handleEdit = async (user) =>{
//   setFormValue({
//     name: user.name,
//     username: user.username,
//     email: user.email
//  });
//  setCurrentUserId(user.id);
// }

// let handleUpdate = async (e) =>{
//   try {
//     const response = await fetch(`https://reqres.in/api/users/${currentUserId}`, {
//        method: 'PUT',
//        headers: { 'Content-Type': 'application/json' },
//        body: JSON.stringify(FormValue)
//     });
//     const data = await response.json();
//     console.log('Success update', data);
//     setUsers(users.map(user => (user.id === currentUserId ? data : user))); //this will check user.id equal current userid if found replace with data else user
//     setFormValue({
//       name: '',
//       username: '',
//       email: ''
//     });
//  } catch (error) {
//     console.log(error);
//  }
// }


return (
    <>
    <Album/>
    <Todos/>
    <PostInfo/>
    <Project/>
    <Comment/> 
   {/*  < UserData/> */}


{/* //       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <div className="row">
//             <div className="col-6">
//               <label className="form-label"> name</label>
//               <input type="text" className="form-control" name="name" value={FormValue.name} onChange={handleChange} />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-6">
//               <label className="form-label"> username</label>
//               <input type="text" className="form-control" name="username" value={FormValue.username} onChange={handleChange} />
//             </div>
//             <div className="col-6"> */}
{/* //               <label className="form-label"> email</label>
//               <input type="email" className="form-control" name="email" value={FormValue.email} onChange={handleChange} />
//             </div> */}
{/* //           </div> */}
{/* //           <button type="submit" className="btn btn-primary mb-2 mt-2">Create</button>
//           <button type="button" className="btn btn-success mb-2 mt-2"  onClick={handleUpdate} >Update</button>
//           <button type="button" className="btn btn-danger mb-2 mt-2">cancel</button>
//         </form> */}
{/* //       </div> */}

{/* //       <table className="table table-dark table-striped">
//         <thead>
//           <tr>
//             <th>name</th>
//             <th>username</th>
//             <th>email</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user =>
//             <tr key={user.id}> */}
{/* //               <td>{user.name}</td>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>
//                 <button className="btn btn-success" onClick={() => handleEdit(user, user.id)}>EditUser</button>
//                 <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>delete</button>
//               </td>
//             </tr> */}
{/* //           ))} */}
{/* //         </tbody> */}
{/* //       </table> */}
    
    </>
  )
}