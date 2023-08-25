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
  
    return (
        <>
        <h1>Axios</h1>
      <div>
        
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
              
            
              </div>
        </div>
            )   
        })}
      </div>
      </>
    );
  }
  


export default Axios

{/* <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
<MDBContainer className="py-5 h-100">
  <MDBRow className="justify-content-center align-items-center h-100">
    <MDBCol lg="6" className="mb-4 mb-lg-0">
      <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
        <MDBRow className="g-0">
          <MDBCol md="4" className="gradient-custom text-center text-white"
            style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
            <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
              alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
            <MDBTypography tag="h5">{item.name}</MDBTypography>
            <MDBCardText>{item.company.name}<br/>{`(${item.company.catchPhrase})`}</MDBCardText>
            <MDBIcon far icon="edit mb-5" />
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody className="p-4">
              <MDBTypography tag="h6">Information</MDBTypography>
              <hr className="mt-0 mb-4" />
              <MDBRow className="pt-1">
                <MDBCol size="6" className="mb-3">
                  <MDBTypography tag="h6">Address</MDBTypography>
                  <MDBCardText className="text-muted">{item.address.city}</MDBCardText>
                </MDBCol>
                <MDBCol size="6" className="mb-3">
                  <MDBTypography tag="h6">Email</MDBTypography>
                  <MDBCardText className="text-muted">{item.email}</MDBCardText>
                </MDBCol>
                <MDBCol size="6" className="mb-3">
                  <MDBTypography tag="h6">Phone</MDBTypography>
                  <MDBCardText className="text-muted">{item.phone}</MDBCardText>
                </MDBCol>
              </MDBRow>

              <MDBTypography tag="h6">Projects</MDBTypography>
              <hr className="mt-0 mb-4" />
              <MDBRow className="pt-1">
                <MDBCol size="6" className="mb-3">
                  <MDBTypography tag="h6">Specialisation</MDBTypography>
                  <MDBCardText className="text-muted">{item.company.catchPhrase}</MDBCardText>
                </MDBCol>
              <div className="d-flex justify-content-start">
                <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</section> */}