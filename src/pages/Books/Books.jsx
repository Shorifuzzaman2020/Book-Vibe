
import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';


const Books = () => {
    const [bookdata, setbookData] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json')
            .then(res => res.json())
            .then(data => setbookData(data))
            .catch(err => console.error('Fetch error:', err));
    }, []);

    return (
        <div>
            <p className='text-4xl font-bold text-center my-4'>Books</p>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {bookdata.map(book => (
                    <Book key={book.id} book={book} />
                    ))}
                </div>
                </div>
        </div>
    );
};

export default Books;
