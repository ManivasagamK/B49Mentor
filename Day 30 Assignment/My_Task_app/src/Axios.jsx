import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Axios.css'
function Axios() {
    const [post, setPost] = useState([]);

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
        console.log(data);
        setPost(data.data);
      });
    }, []);
  // console.log(post)
  const handleEdit=(item,index)=>{

  }
    return (
        <>
        <h1>Axios</h1>
        <div className='form'>
        <div className="input">
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name'/>
        </div>
        <br/>
        {/* <label htmlFor='name'>Name:</label>
        <input type='text' id='name'/> */}
        <div className="input">
        <label htmlFor='username'>UserName:</label>
        <input type='text' id='username'/>
        </div>
        <br/>
        <div className="input">
        <label htmlFor='companyname'>CompanyName:</label>
        <input type='text' id='companyname'/>
        </div>
        <br/>
        <div className="input">
        <label htmlFor='specialisation'>Specialisation:</label>
        <input type='text' id='specialisation'/>
        </div>
        <br/>
        <div className="input">
        <label htmlFor='cityname'>CityName:</label>
        <input type='text' id='cityname'/>
        </div>
        <br/>
        <div className="input">
        <label htmlFor='phone'>PhoneNo:</label>
        <input type='text' id='phone'/>
        </div>
        <br/>
        <div className="input">
        <label htmlFor='email'>Email-Id:</label>
        <input type='text' id='email'/>
        </div>
        <br/>
        <button type='submit' >Add</button>
        </div>
      <div className='main'>
        
        {post.map((item, i) => {
            return(
        <div key={i} className='container'>
            <div className='card'>
              <p><strong>Name:</strong>{` `+item.name}</p>
              <p><strong>UserName:</strong>{` `+ item.username}</p>
              <p><strong>CompanyName:</strong>{` `+ item.company.name}</p>
              <p><strong>Specialisation:</strong>{` `+item.company.catchPhrase}</p>
              <p><strong>CityName:</strong>{` `+item.address.city}</p>
              <p><strong>PhoneNo:</strong>{` `+ item.phone}</p>
              <p><strong>Email-Id:</strong>{` `+ item.email}</p>
              <button className='btn btn-info' onClick={handleEdit}><strong>Edit</strong></button>
              <button className='btn btn-danger' onClick={handleDelete}><strong>Delete</strong></button>
            
              </div>
        </div>
            )   
        })}
      </div>
      </>
    );
  }
  


export default Axios
