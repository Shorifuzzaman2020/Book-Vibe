import React from 'react';
import { useLoaderData } from 'react-router';
import Book from '../Book/Book';

const ListedBook = () => {
    const data = useLoaderData();
    return (
        <div>
            <p className='text-4xl font-bold text-center my-4'>Books</p>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {data.map(book => (
                        <Book key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListedBook;