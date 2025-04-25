import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook, getStoredWishListBook } from '../../Utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    let [wishList, setWishList] = useState([]);
    let [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");
    const data = useLoaderData();
    console.log(data);
    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);
    }, [])
    useEffect(() => {
        const storedWishBookData = getStoredWishListBook();
        const convertedStoredWishListBooks = storedWishBookData.map(id => parseInt(id));
        const myWishList = data.filter(book => convertedStoredWishListBooks.includes(book.bookId));
        setWishList(myWishList);
    }, [])

    const handleSort = (type) => {
        setSort(type);
        if (type === "pages") {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage);
            console.log(sortedByPage);
        }
        if (type === "ratings") {
            const sortedByRatings = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByRatings);
        }
    }



    return (
        <div className='w-11/12 mx-auto'>
            <details className="dropdown">
                <summary className="btn m-1">Sort By: {sort ? sort : ""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort("pages")}>Pages</a></li>
                    <li><a onClick={() => handleSort("ratings")}>Ratings</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex justify-center w-11/12 mx-auto mb-4'>
                        <div className='grid lg:grid-cols-3 gap-5'>
                            {
                                readList.map(b => <Book key={b.bookId} book={b}></Book>)
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='flex justify-center w-11/12 mx-auto'>
                        <div className='grid lg:grid-cols-3 gap-5'>
                            {
                                wishList.map(bw => <Book key={bw.bookId} book={bw}></Book>)
                            }
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;