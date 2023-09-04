import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Axios.css'
function Axios() {
    const [post, setPost] = useState([]);
    
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
        setPost(data?.data);
      });
    }, []);
    
  
 
  
  const [inputValues, setInputValues] = useState({
    name: '',
    username: '',
    companyname: '',
    specialisation: '',
    city: '',
    phone: '',
    email: '',
  });





const handleInputChange = (event) => {
    const { id, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
 

  }
const newData = {
      id: inputValues.id || Date.now(),
      name: inputValues.name.trim(),
      username: inputValues.username.trim(),
      companyname: inputValues.companyname.trim(),
      specialisation: inputValues.specialisation.trim(),
      city: inputValues.city.trim(),
      phone: inputValues.phone.trim(),
      email: inputValues.email.trim(),
    };
const handlesubmit=(event)=>{
  event.preventDefault();

    setPost((prevPosts) => [...prevPosts, newData]);
    setInputValues({
      id: '',
      name: '',
      username: '',
      companyname: '',
      specialisation: '',
      city: '',
      phone: '',
      email: '',
    });
  };

  const handleEdit=(item,i)=>{
   // console.log(post.splice(i,1));
    //console.log(post)
    
      
      setInputValues({
        
        name: post[i].name,
        username: post[i].username, 
        specialisation:(post[i].company?.catchPhrase || post[i].specialisation),
        companyname:(post[i].company?.name || post[i].companyname),
        city:(post[i].address?.city || post[i].city),
        phone:post[i].phone,
        email: post[i].email});
        post.splice(i,1)
        setPost(post);
  }
  const handleDelete=(i)=>{
    post.splice(i,1)
        setPost(post);
  
  }
    return (
        <>
        <h1>Axios</h1>
        <form className='form' onSubmit={handlesubmit}>
      
        
        <div className="input">
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' value={inputValues.name} onChange={(event)=>handleInputChange(event)} />
        </div>
        <br/>
        
        <div className="input">
        <label htmlFor='username'>UserName:</label>
        <input type='text' id='username' value={inputValues.username} onChange={(event)=>handleInputChange(event)}/>
        </div>
        <br/>
        <div className="input">
        <label htmlFor='companyname'>CompanyName:</label>
        <input type='text' id='companyname' value={inputValues.companyname} onChange={(event)=>handleInputChange(event)}/>
        </div>
        <br/>
        <div className="input">
        <label htmlFor='specialisation'>Specialisation:</label>
        <input type='text' id='specialisation' value={inputValues.specialisation} onChange={(event)=>handleInputChange(event)}/>
        </div>
        <br/>
        <div className="input">
        <label htmlFor='cityname'>CityName:</label>
        <input type='text' id='cityname' value={inputValues.city} onChange={(event)=>handleInputChange(event)}/>
        </div>
        <br/>
        <div className="input">
        <label htmlFor='phone'>PhoneNo:</label>
        <input type='text' id='phone' value={inputValues.phone} onChange={(event)=>handleInputChange(event)}/>
        </div>
        <br/>
        <div className="input">
        <label htmlFor='email'>Email-Id:</label>
        <input type='text' id='email' value={inputValues.email} onChange={(event)=>handleInputChange(event)}/>
        </div>
        <br/>
        <button type='submit'>Add</button>
        </form>
      <div className='main'>
        
        {post.map((item, i) => (
            
        <div key={i} className='container'>
            <div className='card'>
            {/* <p><strong>Id:</strong>{` `+item.id}</p> */}
              <p><strong>Name:</strong>{` `+item.name}</p>
              <p><strong>UserName:</strong>{` `+ item.username}</p>
              <p><strong>Specialisation:</strong>{` `+(item.company?.catchPhrase || item.specialisation)}</p>
              <p><strong>CompanyName:</strong>{` `+ (item.company?.name || item.companyname)}</p>
              <p><strong>CityName:</strong>{` `+(item.address?.city || item.city)}</p>
              <p><strong>PhoneNo:</strong>{` `+ item.phone}</p>
              <p><strong>Email-Id:</strong>{` `+ item.email}</p>
              <button className='btn btn-info' onClick={()=>handleEdit(item,i)}><strong>Edit</strong></button>
              <button className='btn btn-danger' onClick={()=>handleDelete(i)}><strong>Delete</strong></button>
            
              </div>
        </div>
             
        ))}
      </div>
      </>
    );
  }
  


export default Axios;
