
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import IndividualBook from '../pages/IndividualBook/IndividualBook';
import ReadList from '../pages/ReadList/ReadList';
import ListedBook from '../pages/ListedBook/ListedBook';
import About from '../pages/About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'readList',
        loader: () => fetch('/bookData.json'),
        element: <ReadList />,
      },
      {
        path:'listedBook',
        loader: () => fetch('/bookData.json'),
        element: <ListedBook />
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'individualBook/:id',
        loader: () => fetch('/bookData.json'),
        element: <IndividualBook />,
      },
    ],
  },
]);

export default router;
