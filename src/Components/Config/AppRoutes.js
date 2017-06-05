import React from 'react';

import PostsGrid from '../Sections/PostsGrid';
// import Home from '../Sections/Home';
import NewPost from '../Sections/NewPost';
import PostDetail from '../Sections/PostDetail'




const mainLinksRoutes = [
  // {
  //   path: "/",
  //   component: Home,
  //   name: "Alquiler/Venta",
  //   exact: true
  // },
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
    component: NewPost,
    name: "Nuevo"
  },
  {
    path: "/view",
    component: PostDetail,
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
