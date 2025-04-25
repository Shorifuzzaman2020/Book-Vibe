
import React from 'react';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { Link } from 'react-router';

const Book = ({ book }) => {
    console.log(book);
    return (
        <div>
            <Link to={`/individualBook/${book.bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10 py-5 bg-gray-200">
                    <img
                    src={book.image}
                    alt={book.bookName}
                    className="h-60 w-40"
                    />
                </figure>
                <div className="card-body p-10 text-center">
                    <div className="flex justify-between">
                    <div className="bg-green-200 px-5 py-2 rounded-2xl">
                        <p className="text-green-500 font-bold">Young Adult</p>
                    </div>
                    <div className="bg-green-200 px-5 py-2 rounded-2xl">
                        <p className="text-green-500 font-bold">Identity</p>
                    </div>
                    </div>
                    <h2 className="card-title my-2">{book.bookName}</h2>
                    <p className="text-start my-1">By: {book.author}</p>
                    <div className="border-t border-dashed">
                    <div className="my-2 flex justify-between">
                        <h1>{book.category}</h1>
                        <h1 className="flex items-center gap-2">
                        <span><FaRegStarHalfStroke /></span>{book.rating}
                        </h1>
                    </div>
                    </div>
                </div>
            </div>
            </Link>     
        </div>
    );
};

export default Book;
