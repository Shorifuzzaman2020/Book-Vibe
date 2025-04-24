
import React from 'react';

const Book = ({ book }) => {
    return (
        <div>
            <h2>{book.bookName}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Rating:</strong> {book.rating}</p>
        </div>
    );
};

export default Book;
