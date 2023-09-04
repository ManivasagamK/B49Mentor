import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const validate = (values) => {
  const errors = {};

  if (!values.bookname) {
    errors.bookname = 'Required';
  } else if (values.bookname.length > 50) {
    errors.bookname = 'Must be 50 characters or less';
  }

  if (!values.author) {
    values.author = {}; // Initialize author if it's undefined
  }

  if (!values.author.name) {
    errors.author = { ...errors.author, name: 'Required' };
  } else if (values.author.name.length > 20) {
    errors.author = { ...errors.author, name: 'Must be 20 characters or less' };
  }

  if (!values.author.DoB) {
    errors.author = { ...errors.author, DoB: 'Required' };
  } else if (values.author.DoB.length > 10) {
    errors.author = { ...errors.author, DoB: 'Must be 10 characters or less' };
  }

  if (!values.author.Bio) {
    errors.author = { ...errors.author, Bio: 'Required' };
  } else if (values.author.Bio.length > 30) {
    errors.author = { ...errors.author, Bio: 'Must be 30 characters or less' };
  }

  if (!values.ISBNnumber) {
    errors.ISBNnumber = 'Required';
  } else if (values.ISBNnumber.length > 20) {
    errors.ISBNnumber = 'Must be 20 characters or less';
  }

  if (!values.Publication) {
    errors.Publication = 'Required';
  } else if (values.Publication.length > 10) {
    errors.Publication = 'Must be 10 characters or less';
  }

  return errors;
};

function Books() {
  const [submittedData, setSubmittedData] = React.useState([]);

  const formik = useFormik({
    initialValues: {
      bookname: '',
      author: {
        name: '',
        DoB: '',
        Bio: '',
      },
      ISBNnumber: '',
      Publication: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setSubmittedData([...submittedData, values]);
      axios.post('http://localhost:4000/book', values).then((response) => {
        console.log('Book successfully added:', response.data);
      });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="bookname">Book Name:</label>
        <input
          type="text"
          id="bookname"
          name="bookname"
          value={formik.values.bookname}
          onChange={formik.handleChange}
        />
        {formik.errors.bookname ? <div>{formik.errors.bookname}</div> : null}

        <label htmlFor="author.name">Author Name:</label>
        <input
          type="text"
          id="author.name"
          name="author.name"
          value={formik.values.author.name}
          onChange={formik.handleChange}
        />
        {formik.errors.author && formik.errors.author.name ? (
          <div>{formik.errors.author.name}</div>
        ) : null}

        <label htmlFor="author.DoB">Author DOB:</label>
        <input
          type="text"
          id="author.DoB"
          name="author.DoB"
          value={formik.values.author.DoB}
          onChange={formik.handleChange}
        />
        {formik.errors.author && formik.errors.author.DoB ? (
          <div>{formik.errors.author.DoB}</div>
        ) : null}

        <label htmlFor="author.Bio">Author Biography:</label>
        <input
          type="text"
          id="author.Bio"
          name="author.Bio"
          value={formik.values.author.Bio}
          onChange={formik.handleChange}
        />
        {formik.errors.author && formik.errors.author.Bio ? (
          <div>{formik.errors.author.Bio}</div>
        ) : null}

        <label htmlFor="ISBNnumber">ISBN Number:</label>
        <input
          type="text"
          id="ISBNnumber"
          name="ISBNnumber"
          value={formik.values.ISBNnumber}
          onChange={formik.handleChange}
        />
        {formik.errors.ISBNnumber ? <div>{formik.errors.ISBNnumber}</div> : null}

        <label htmlFor="Publication">Publication Date:</label>
        <input
          type="text"
          id="Publication"
          name="Publication"
          placeholder="DD/MM/YYYY"
          value={formik.values.Publication}
          onChange={formik.handleChange}
        />
        {formik.errors.Publication ? <div>{formik.errors.Publication}</div> : null}

        <button type="submit">Add</button>
      </form>

      <div>
        <h2>Submitted Data</h2>
        <ul>
          {submittedData.map((data, index) => (
            <li key={index}>{JSON.stringify(data, null, 2)}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Books;
