import { useEffect, useState } from "react";

export default function Album(){
    const [albums,setAlbums]=useState([])
    const[formAlbum,setFormAlbum]=useState({title:''})
   const[currentAlbumID,setcurrentAlbumID]=useState(null)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response=>response.json())
        .then(data=>{console.log("response",data)
            setAlbums(data)
        })
    },[])
  const handelsubmit=async(e)=>{
    e.preventDefault();
    if(currentAlbumID === null){
        const res=await  fetch("https://jsonplaceholder.typicode.com/albums",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body: JSON.stringify(formAlbum)
          });
          setFormAlbum({title:''})                           
          const response=await res.json()
          console.log('success',response)
          setAlbums([...albums,response])
    } else {
        const res=await  fetch(`https://jsonplaceholder.typicode.com/albums/${currentAlbumID}`,{
        method:"PUT",
        headers:{'content-type':'application/json'},
        body: JSON.stringify(formAlbum)
      });
      setFormAlbum({title:''})
      const response=await res.json()
      console.log('success',response)
      setAlbums(albums.map(album => album.id === currentAlbumID ? response : album))
      setcurrentAlbumID(null) }
      setFormAlbum({title:''});
 
  }
  const handelchange=(e)=>{
    const{name,value}=e.target;
    setFormAlbum({...formAlbum,[name]:value})
  }
  const handleEdit=(albumId)=>{
    console.log(albumId)
    setFormAlbum({title:albumId.title})
    setcurrentAlbumID(albumId.id)
  }
 const handleDelete=(id)=>{
     fetch(`https://jsonplaceholder.typicode.com/albums/${id}`,{
        method:'DELETE' })
     setAlbums(albums.filter(album =>(album.id !== id) )) 


 }
   
    return(
       <>
       <h1>Album</h1>
       <form onSubmit={handelsubmit}>
        <div className="row">
            <div className="col">
                <label htmlFor="form-control">TITLE</label>
                <input type="text" className="form-control" name="title" value={formAlbum.title} onChange={handelchange}/>
            </div>
            <div className="col"></div>
        </div>
        <button type="submit">{currentAlbumID ? 'update' :'create'}</button>
       </form>
       <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>action</th>
                
            </tr>
        </thead>
        <tbody>
            {albums.map((album=>
                <tr key={album.id}>
                    <td>{album.title}</td>
                    <td>
                        <button className="btn btn-success" onClick={()=>handleEdit(album,album.id)}>edit</button>
                        <button className="btn btn-danger" onClick={()=>handleDelete(album.id)}>delete</button>
                    </td>
                </tr>
            ))

            }
        </tbody>
       </table>
       </>
    )
}