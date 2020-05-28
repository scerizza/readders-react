import React from 'react'
import '../App.css'
import Book from './book_component'

function BookList({listType, list}){

    const books = list !== undefined ? list : []
    
    return(
        <div className="book-list">
            <br/>
            <h5>{listType}</h5>
            {books.map(book=>(
               <Book
                 title={book.title} 
                 coverBookUrl={book.coverBookUrl}
                 isbn={book.isbn}              
               />  
            ))}
        </div>
    )

}

export default BookList;