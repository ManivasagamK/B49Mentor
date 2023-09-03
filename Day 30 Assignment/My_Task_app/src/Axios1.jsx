import React ,{useState, useEffect}from 'react'
import axios from 'axios';
import "./Axios.css"

function Axios1() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ 
  name: '',
  username: '',
  companyname: '',
  specialisation: '',
  city: '',
  phone: '',
  email: ''});
  const [editingId, setEditingId] = useState(null);
console.log(data)
  useEffect(() => {
    fetchData();
    axios.post("http://localhost:4000",data)
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (item,index) => {
    e.preventDefault();

    try {
      if (editingId) {
        await axios.put(`http://localhost:4000/${editingId}`, formData);
        fetchData();
      } else {
        await axios.post(`http://localhost:4000`, formData);
        fetchData();
      }
console.log(editingId);
console.log(formData)
      setFormData({ name: '',
      username: '',
      companyname: '',
      specialisation: '',
      city: '',
      phone: '',
      email: '',});
      setEditingId(null);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleEdit = (item,index) => {
    // console.log(item.id)
    setFormData({ 
        id: index+1,
        name: item.name, 
        username: item.username, 
        specialisation:(item.company?.catchPhrase || item.specialisation),
        companyname:(item.company?.name || item.companyname),
        city:(item.address?.city || item.city),
        phone:item.phone,
        email: item.email});
    setEditingId(item.id);
  };

  const handleDelete = async (item,i) => {
    console.log(item.id);

    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <h1>Data Management</h1>
      <form className="form" onSubmit={handleSubmit}>
      <div className="input">
        <label htmlFor='name'>Name:</label>
        <input
          type="text"
          id='name'
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        </div>
        <br/>
        <div className="input">
        <label htmlFor='username'>UserName:</label>
        <input
          type="text"
          id='username'
          placeholder="UserName"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        </div>
        <br/>
        <div className="input">
        <label htmlFor='companyname'>CompanyName:</label>
        <input
          type="text"
          id="companyname"
          placeholder="companyname"
          value={formData.companyname}
          onChange={(e) => setFormData({ ...formData, companyname: e.target.value })}
        />
        </div>
        <br/>
        <div className="input">
        <label htmlFor='specialisation'>Specialisation:</label>
         <input
          type="text"
          id="specialisation"
          placeholder="specialisation"
          value={formData.specialisation}
          onChange={(e) => setFormData({ ...formData, specialisation: e.target.value })}
        />
        </div>
        <br/>
        <div className="input">
        <label htmlFor='city'>cityName:</label>
         <input
          type="text"
          id="city"
          placeholder="city"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
        </div>
        <br/>
        <div className="input">
        <label htmlFor='phone'>Phone:</label>
         <input
          type="text"
          id="phone"
          placeholder="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        </div>
        <br/>
        <div className="input">
        <label htmlFor='email'>Email:</label>
        <input
          type="text"
          id="email"
          placeholder="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        </div>
        <button type="submit">{editingId ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {data.map((item,i) => (
             
           <div key={item.id} className='container'>
           <div className='card'>
           <p><strong>Id:</strong>{` `+(item?.id ||i+1)}</p>
             <p><strong>Name:</strong>{` `+item.name}</p>
             <p><strong>UserName:</strong>{` `+ item.username}</p>
             <p><strong>Specialisation:</strong>{` `+(item.company?.catchPhrase || item.specialisation)}</p>
             <p><strong>CompanyName:</strong>{` `+ (item.company?.name || item.companyname)}</p>
             <p><strong>CityName:</strong>{` `+(item.address?.city || item.city)}</p>
             <p><strong>PhoneNo:</strong>{` `+ item.phone}</p>
             <p><strong>Email-Id:</strong>{` `+ item.email}</p>
            <button className="btn btn-info"onClick={() => handleEdit(item,i)}>Edit</button>
            <button className="btn btn-danger"onClick={() => handleDelete(item,i)}>Delete</button>
            </div>
        </div>
          
        ))}
      </ul>
    </div>
  );

}

export default Axios1