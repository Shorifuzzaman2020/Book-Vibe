import React from 'react';
import Banner from '../../components/Header/Banner';
import Books from '../Books/Books';
import Book from '../Book/Book';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;