import React, { useEffect, useState } from 'react';
import axios from "axios";

function Dashboard() {

  let [books, setBooks] =useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/book").then((res)=>{
      setBooks(res.data) ;
    }).catch(error=>{console.log('Error:',error)})
  },[])
  console.log(books);
  return (
    <>
      <div className="Card-container">
        <div className="CardGroup">
          <div className="card1">
              <div className="Card_header">Total Books</div>
              <h1 className="Card_body">3000</h1>
              </div>
              <div className="card2">
              <div className="Card_header">Total Popular Books</div>
              <h1 className="Card_body">350+</h1>
              </div>
              <div className="card3">
              <div className="Card_header">Total Competitive Books</div>
              <h1 className="Card_body">200</h1>
          </div>
        </div>
      </div>
        <div className='book'>
          
              {books.map((item,index)=>(
              <ul className="list">
                <div className="book_list"><strong>Book Name:</strong> {item?.title||item.bookname}</div>
                <br/>
                <div className="book_author"><strong>Author:</strong> {item.author?.name || item.authorname}</div>
                <br/>
                <div className="book_ISBN"><strong>ISBN:</strong> {item?.ISBNnumber}</div>
                <br/>
                <div className="book_Publication"><strong>Publication Date:</strong> {item.Publication}</div>
                <br/>
                <button className='btn btn-info'>Edit</button>
                <button className='btn btn-danger'>Delete</button>
                </ul>
                ))}
          
        </div>
      
    </>
  )
}

export default Dashboard