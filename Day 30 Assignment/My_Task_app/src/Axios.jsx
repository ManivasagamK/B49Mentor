import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Axios.css'
function Axios() {
    const [post, setPost] = useState([]);
    //console.log(post);
    
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
        console.log(data);
        setPost(data.data);
      });
    }, []);
    
  console.log(post)
  const handleAdd=(event)=>{
    event.preventDefault();
    let nameInput = document.getElementById("name");
    let userInput = document.getElementById("username");
    let companyInput = document.getElementById("companyname");
    let specInput = document.getElementById("specialisation");
    let cityInput = document.getElementById("cityname");
    let phoneInput = document.getElementById("phone");
    let emailInput = document.getElementById("email");
    
    let name = nameInput.value.trim();
    let username = userInput.value.trim();
    let catchPhrase = specInput.value.trim();
    let companyname = companyInput.value.trim();
    let city = cityInput.value.trim();
    let phone = phoneInput.value.trim();
    let email = emailInput.value.trim();

    setPost([...post, {name, username,companyname, catchPhrase,city,phone,email}]);
    
  }
  const handleEdit=(item,index)=>{

  }
  const handleDelete=(i)=>{
    // setPost(post.filter((post)=>{return post.id != i}))
  
  }
    return (
        <>
        <h1>Axios</h1>
        <form className='form'>
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
        <button type='submit' onSubmit={handleAdd}>Add</button>
        </form>
      <div className='main'>
        
        {post.map((item, i) => {
            return(
        <div key={i} className='container'>
            <div className='card'>
              <p><strong>Name:</strong>{` `+item.name}</p>
              <p><strong>UserName:</strong>{` `+ item.username}</p>
              <p><strong>Specialisation:</strong>{` `+((item.company.catchPhrase)||(item.catchPhrase))}</p>
              <p><strong>CompanyName:</strong>{` `+ (item.company.name || item.companyname)}</p>
              <p><strong>CityName:</strong>{` `+(item.address.city || item.city)}</p>
              <p><strong>PhoneNo:</strong>{` `+ item.phone}</p>
              <p><strong>Email-Id:</strong>{` `+ item.email}</p>
              <button className='btn btn-info' onClick={handleEdit}><strong>Edit</strong></button>
              <button className='btn btn-danger' onClick={handleDelete(i)}><strong>Delete</strong></button>
            
              </div>
        </div>
            )   
        })}
      </div>
      </>
    );
  }
  


export default Axios
