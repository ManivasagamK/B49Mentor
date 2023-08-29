import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function User() {
  const [books, setBooks] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const initialValues = {
    title: '',
    author: '',
    ISBN: '',
    publication: ''
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    ISBN: Yup.string().required('ISBN is required'),
    publication: Yup.string().required('Publication is required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (editingId !== null) {
        const updatedBooks = books.map((book) =>
          book.id === editingId ? { ...book, ...values } : book
        );
        setBooks(updatedBooks);
      } else {
        setBooks([...books, { ...values, id: Date.now() }]);
      }

      resetForm();
      setEditingId(null);
    },
  });

  const handleEdit = (book) => {
    formik.setValues(book);
    setEditingId(book.id);
  };

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>Library Management</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.author}
          />
          {formik.touched.author && formik.errors.author ? (
            <div>{formik.errors.author}</div>
          ) : null}
        </div>

        <div>
          <label>ISBN:</label>
          <input
            type="text"
            name="ISBN"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ISBN}
          />
          {formik.touched.ISBN && formik.errors.ISBN ? (
            <div>{formik.errors.ISBN}</div>
          ) : null}
        </div>

        <div>
          <label>Publication:</label>
          <input
            type="text"
            name="publication"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.publication}
          />
          {formik.touched.publication && formik.errors.publication ? (
            <div>{formik.errors.publication}</div>
          ) : null}
        </div>

        <button type="submit" className='btn btn-primary'>{editingId !== null ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <span>{book.title} by {book.author} published in {book.publication} . Its ISBN number is {book.ISBN}</span>
            <button onClick={() => handleEdit(book)} className='btn btn-info'>Edit</button>
            <button onClick={() => handleDelete(book.id)} className='btn btn-danger'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;
