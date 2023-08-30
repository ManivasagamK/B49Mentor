import React from 'react'
import { useState } from 'react'

function Crud() {
    const[data,setData]= useState([]);
    const[forminput,setForminput]=useState({id:null,name:""});
    // const [editingid, setEditingId]=useState(null);

    const handleAdd=(event)=>{
        event.preventDefault();
        const newitem = {id:Date.now(), forminput.name};
        setData([...data, newitem]);
        setForminput({id:null,name:""});
        
    }
    // const handlechange=(event)=>{
    //     const { id, value } = event.target;
    //     setForminput((prevform)=>({...prevform,[id]:value}))
    // }
  return (
    <>
    <label htmlFor='name'>Name:</label>
    <input id='name' type='text' value={forminput.name} onChange={(e)=>setForminput({...forminput, name:e.target.value})}></input>
    <button onClick={(event)=>handleAdd(event)}>Add</button>

    <p>{data}</p>
    </>
  )
}

export default Crud