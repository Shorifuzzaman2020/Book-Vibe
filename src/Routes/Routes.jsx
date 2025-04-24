import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import IndividualBook from '../pages/IndividualBook/IndividualBook';


const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            index: true,
            path: "/",
            Component: Home,
        },
        {
          path:"/individualBook/:id",
          loader:()=>fetch('bookData.json'),
          Component: IndividualBook,
        }
      ]
    },
  ]);

export default router;