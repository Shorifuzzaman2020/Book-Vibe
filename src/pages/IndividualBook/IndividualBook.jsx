import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB, addToStoredWishListDB } from '../../Utility/addToDB';


const IndividualBook = () => {
    const { id } = useParams();
    const bookID = parseInt(id);
    const data = useLoaderData();
    
    const singleData = data.find(book => book.bookId === bookID);
    console.log(singleData);
    const handleMarkAsRead=(id)=>{
        addToStoredDB(id);
    }
    const handleWishList=(id)=>{
        addToStoredWishListDB(id);
    }
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm w-11/12 mx-auto lg:p-10">
                <figure className='w-[100%] bg-gray-200 rounded-lg p-16 lg:p-32'>
                    <img
                        src={singleData.image}
                        alt="Album" />
                </figure>
                <div className="card-body lg:px-12">
                    <h2 className="card-title text-4xl">{singleData.bookName}</h2>
                    <p className='font-bold my-3'>By: {singleData.author}</p>
                    <div className='border-y'>
                    <p className='my-3'>{singleData.category}</p>
                    </div>
                    <p>Review: {singleData.review}</p>
                    <p>Tags: {singleData.tags.map((tag, index) => (
                        <span key={index} className="inline-block px-2 py-1 mx-1 bg-green-100 text-green-700 rounded">
                            {tag}
                        </span>
                    ))}</p>
                    <p>Number of Pages: {singleData.totalPages}</p>
                    <p>Publisher: {singleData.publisher}</p>
                    <p>Year of Publishing: {singleData.yearOfPublishing}</p>
                    <p>Rating: {singleData.rating}</p>
                    <div className="card-actions">
                        <button onClick={()=>handleMarkAsRead(id)} className="btn">Mark as Read</button>
                        <button onClick={()=>handleWishList(id)} className="btn btn-primary">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualBook;