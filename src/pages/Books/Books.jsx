
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
            <p>This is books page</p>
            {bookdata.map(book => (
                <Book key={book.id} book={book} />
            ))}
            
        </div>
    );
};

export default Books;
