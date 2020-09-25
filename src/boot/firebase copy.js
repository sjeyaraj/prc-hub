var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
var firebaseConfig = {
  apiKey: "AIzaSyB8ZR40DL_1YNwMSRBPXP3PDLVJEXoY7i8",
  authDomain: "prchub-92f5d.firebaseapp.com",
  databaseURL: "https://prchub-92f5d.firebaseio.com",
  projectId: "prchub-92f5d",
  storageBucket: "prchub-92f5d.appspot.com",
  messagingSenderId: "517060527248",
  appId: "1:517060527248:web:4a81b774f212bb38824415",
  measurementId: "G-PRPL37JTNF"
};
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
export { firebaseAuth };
// firebase.analytics();
