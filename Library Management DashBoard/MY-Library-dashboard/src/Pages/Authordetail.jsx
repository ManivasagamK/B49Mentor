import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Modal from 'react-modal';

function Authordetail() {
  let [books, setBooks] =useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/book").then((res)=>{
      setBooks(res.data) ;
    }).catch(error=>{alert('Error:',error)})
  },[])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedBook, setEditedBook] = useState(null);

  // Function to open the modal for editing
  const openModal = (book) => {
    setEditedBook(book);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle the "Save" button click inside the modal
  const handleSave = () => {
    // Send a PUT request to update the book on the server
    axios.put(`http://localhost:4000/book/${editedBook.id}`, editedBook)
      .then((response) => {
        console.log('Book updated successfully:', response.data);
        
        // Find and update the book in the state
        const updatedBooks = [...books];
        const index = updatedBooks.findIndex((book) => book.id === editedBook.id);
        if (index !== -1) {
          updatedBooks[index] = editedBook;
          setBooks(updatedBooks);
        }

        closeModal(); // Close the modal after successful update
      })
      .catch((error) => {
        console.error('Error updating book:', error);
        // You may want to handle errors and display a message to the user
      });
  };

  const handleDelete = (index) => {
    const bookToDelete = books[index];
    axios.delete(`http://localhost:4000/book/${bookToDelete.id}`)
      .then(() => {
        // Remove the deleted book from the state
        const updatedBooks = [...books];
        console.log (updatedBooks)
        updatedBooks.splice(index, 1);
        setBooks(updatedBooks);
      })
      .catch((error) => {
        console.error('Error deleting book:', error);
      });
  };

  return (
    <>
   <div className='book'>
          
              {books.map((item,index)=>(
              <ul className="list">
                <div className="book_list"><strong>Author Name:</strong> {item.author?.name}</div>
                <br/>
                <div className="book_authorDob"><strong>DOB:</strong> {item.author?.DoB}</div>
                <br/>
                <div className="book_authorBio"><strong>Biography:</strong> {item.author?.Bio}</div>
                <br/>
                <button className='btn btn-info' onClick={() => openModal(item)}>Edit</button>
                <button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button>
                </ul>
                ))}
          
        </div>
        {/* Modal for editing */}
      <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Book"
    >
      {editedBook && (
        <div>
          <h2>Edit Book</h2>
          <form>
            {/* Create form fields for editing */}
            <label>Author Name:</label>
            <input
              type="text"
              value={editedBook.author.name}
              onChange={(e) => setEditedBook({ ...editedBook, author:{name: e.target.value}})}
            />
            <label>Author DoB:</label>
            <input
              type="text"
              value={editedBook.author.DoB}
              onChange={(e) => setEditedBook({ ...editedBook, author:{DoB: e.target.value}})}
            />
            <label>Author Biography:</label>
            <input
              type="text"
              value={editedBook.author.Bio}
              onChange={(e) => setEditedBook({ ...editedBook, author:{Bio: e.target.value}})}
            />
            {/* ... other fields ... */}
            <button onClick={handleSave}>Save</button>
            <button onClick={closeModal}>Cancel</button>
          </form>
        </div>
      )}
    </Modal>
    </>
  )
}

export default Authordetail