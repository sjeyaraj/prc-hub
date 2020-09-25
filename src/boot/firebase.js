var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
var firebaseConfig = {
  apiKey: "xxxxxxxx",
  authDomain: "xxxxxx",
  databaseURL: "xxxxx",
  projectId: "xx",
  storageBucket: "xxx",
  messagingSenderId: "xx",
  appId: "1xxx",
  measurementId: "G-xxxx"
};
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
export { firebaseAuth };
// firebase.analytics();
