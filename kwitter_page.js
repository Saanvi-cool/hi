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

username = localStorage.getItem("username_key");
room_name = localStorage.getItem("room_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
console.log(message_data);
                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("username_key");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: username,
            message: msg,
            like: 0 
      });
      document.getElementById("msg").value="";
}

function update_like(word){
      button_id=word;
      likes=document.getElementById(button_id).value;
      likes=Number(likes)+1;
      console.log(likes);
      firebase.database().ref(room_name).child(word).update({
            like:likes
      });
}
