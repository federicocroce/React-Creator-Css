import * as firebase from 'firebase';

 const config = {
    apiKey: "AIzaSyADVg_Ig39yxHhlMUdoQFAYtmG5_XN79rg",
    authDomain: "inmuebles-9567a.firebaseapp.com",
    databaseURL: "https://inmuebles-9567a.firebaseio.com",
    projectId: "inmuebles-9567a",
    storageBucket: "inmuebles-9567a.appspot.com",
    messagingSenderId: "598700817825"
  };

 export const firebaseApp = firebase.initializeApp(config);