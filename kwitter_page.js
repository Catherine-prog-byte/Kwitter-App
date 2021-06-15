//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBYL9rnIuTqZm_T0l-KEL5ktXsua0SycAc",
      authDomain: "catherineangelinabot-yhjc.firebaseapp.com",
      databaseURL: "https://catherineangelinabot-yhjc-default-rtdb.firebaseio.com",
      projectId: "catherineangelinabot-yhjc",
      storageBucket: "catherineangelinabot-yhjc.appspot.com",
      messagingSenderId: "357827274507",
      appId: "1:357827274507:web:d66b611e0e1a3f54d5e40e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()  {
     msg=document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
     });
      document.getElementById("msg").value="";
    }
    function logout() {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location="index.html";
    }
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
