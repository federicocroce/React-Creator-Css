import React from 'react';

import PostsGrid from '../Sections/PostsGrid';
import Home from '../Sections/Home';
import NewPost from '../Sections/NewPost';
import PostDetails from '../Sections/PostDetails'




const mainLinksRoutes = [
  {
    path: "/",
    component: Home,
    name: "",
    exact: true,
    show:false
  },
  {
    path: "/main",
    component: PostsGrid,
    name: "Todos"
  },
  {
    path: "/sale",
    component: PostsGrid,
    name: "Ventas"
  },
  {
    path: "/rent",
    component: PostsGrid,
    name: "Alquileres"
  },
  ,
  {
    path: "/new",
    component: PostDetails,
    name: "Nuevo"
  },
  {
    path: "/view",
    component: PostDetails,
    name: "",
    show:false
  }
];

// const tabLinksRoutes = [
//   // {
//   //   path: "/owner/PhotoGrid",
//   //   component: PhotoGrid,
//   //   name: "PhotoGrid",
//   //   title:"PhotoGrid"
//   // },
//   {
//     path: "/owner/Tab",
//     component: Tab,
//     name: "Tab",
//     title:"Titulo"
//   },
//   {
//     path: "/owner/Tab",
//     component: Tab,
//     name: "Tab",
//     title:"Titulo"
//   }
// ];


export {
    mainLinksRoutes
    // tabLinksRoutes
}
