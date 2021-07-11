
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBPX_H1QlMhsKgwe-kUCbXr5_RefP0hNzE",
    authDomain: "kwitter-f58f9.firebaseapp.com",
    databaseURL: "https://kwitter-f58f9-default-rtdb.firebaseio.com",
    projectId: "kwitter-f58f9",
    storageBucket: "kwitter-f58f9.appspot.com",
    messagingSenderId: "77515196247",
    appId: "1:77515196247:web:e755055cb33f5e09dde012"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  }