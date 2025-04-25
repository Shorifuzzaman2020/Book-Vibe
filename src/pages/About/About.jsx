import React from 'react';

const About = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-4xl font-bold mb-4 text-center text-green-700">📚 Welcome to the Online Book Library</h1>
                <p className="text-lg mb-4 text-gray-700">
                    Discover a world of stories, knowledge, and imagination—all in one place. Our Online Book Library is designed to provide a seamless and enriching reading experience for everyone, anytime and anywhere.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600">🌐 Easy Access, Anytime</h2>
                <p className="text-gray-700 mb-4">
                    With just a few clicks, you can browse, select, and start reading from a wide range of books. Whether you're into fiction, non-fiction, academic texts, or self-help, we have something for every reader.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600">🔍 Smart Search & Filters</h2>
                <p className="text-gray-700 mb-4">
                    Find your next favorite read with our intuitive search and category filters. Explore by genre, author, rating, or even reading time.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600">📖 Read Instantly</h2>
                <p className="text-gray-700 mb-4">
                    No downloads or special software needed—open any book and start reading right in your browser. It's that easy!
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600">❤️ Save & Revisit</h2>
                <p className="text-gray-700 mb-4">
                    Mark books as favorites, add to your reading list, and track your progress so you can always pick up where you left off.
                </p>

                <div className="mt-8 text-center">
                    <p className="text-xl text-green-700 font-medium">Join thousands of readers who’ve already made the switch to smarter reading.</p>
                    <p className="text-xl text-green-700 font-medium">Dive into our digital library today and let the stories begin!</p>
                </div>
            </div>

        </div>
    );
};

export default About;