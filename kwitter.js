// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCAheWkrjZxapEMljpHXr9ohfQce8sZXKc",
      authDomain: "twitter-8e621.firebaseapp.com",
      databaseURL: "https://twitter-8e621-default-rtdb.firebaseio.com",
      projectId: "twitter-8e621",
      storageBucket: "twitter-8e621.appspot.com",
      messagingSenderId: "563818798460",
      appId: "1:563818798460:web:94399c5b57aa22845a58f9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  getData();
  user_name = localStorage.getItem("username_key");
  document.getElementById("welcome").innerHTML = "Welcome " + user_name + "!? " + "I thought you would come later..";
  
  function getData() {
        firebase.database().ref("/").on('value', function (snapshot) {
              document.getElementById("output").innerHTML = "";
              snapshot.forEach(function (childSnapshot) {
                    childKey = childSnapshot.key;
                    Room_names = childKey;
                   row='<div class="room_name" onclick="redirect_room(this.id)"id="'+Room_names+'">'+Room_names+'</div> <hr>';
                   document.getElementById("output").innerHTML+=row;
              });
        });
  }
  getData();
  function redirect_room(room_id) {
        console.log(room_id);
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
  }
  function add_room() {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose: "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
  }
  