import React, { useEffect } from 'react';
import {useFormik} from 'formik'
import axios from 'axios';
const validate = values => {
  const errors = {};
  if (!values.bookname) {
    errors.bookname = 'Required';
  } else if (values.bookname.length > 50) {
    errors.bookname = 'Must be 15 characters or less';
  }

  if (!values.authorname) {
    errors.authorname = 'Required';
  } else if (values.authorname.length > 20) {
    errors.authorname = 'Must be 20 characters or less';
  }

  if (!values.ISBNnumber) {
    errors.ISBNnumber = 'Required';
  } else if (values.ISBNnumber.length >20) {
    errors.ISBNnumber = 'Must be 20 characters or less';
  }
  
  if (!values.Publication) {
    errors.Publication = 'Required';
  } else if (values.Publication.length >10) {
    errors.Publication = 'Must be 10 characters or less';
  }
  return errors;
};

function Books() {
  let data= [];
  useEffect(()=>{
    
  },[])
  
  let formik =useFormik({
    initialValues:{
      bookname:"",
      authorname:"",
      ISBNnumber:"",
      Publication:""
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      data.push(values);
      axios.post("http://localhost:4000/book",values)
    },

  });
  return (
    <>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='bookname'>Book Name:</label>
      <input 
      type="text" 
      id="bookname"
      name='bookname'
      value={formik.values.bookname}
      onChange={formik.handleChange}
      />
      {formik.errors.bookname ? <div>{formik.errors.bookname}</div> : null}

<label htmlFor='authorname'>Author Name:</label>
      <input 
      type="text" 
      id="authorname"
      name='authorname'
      value={formik.values.authorname}
      onChange={formik.handleChange}
      />
      {formik.errors.authorname ? <div>{formik.errors.authorname}</div> : null}

<label htmlFor='ISBNnumber'>ISBN Number:</label>

    <input 
      type="text" 
      id="ISBNnumber"
      name='ISBNnumber'
      value={formik.values.ISBNnumber}
      onChange={formik.handleChange}
      />
     {formik.errors.ISBNnumber ? <div>{formik.errors.ISBNnumber}</div> : null}

<label htmlFor='Publication'>Publication Date:</label>
    <input 
      type="text" 
      id="Publication"
      name='Publication'
      placeholder='DD/MM/YYYY'
      value={formik.values.Publication}
      onChange={formik.handleChange}
      />
      {formik.errors.Publication ? <div>{formik.errors.Publication }</div> : null}


      <button type="submit">Add</button>
    </form>
    </>
  )
}

export default Books