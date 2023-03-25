var firebaseConfig = {
      apiKey: "AIzaSyC9UWWKNDevUKbGIeXN-AwcvDjXX_toUEc",
      authDomain: "project-cad95.firebaseapp.com",
      databaseURL: "https://project-cad95-default-rtdb.firebaseio.com",
      projectId: "project-cad95",
      storageBucket: "project-cad95.appspot.com",
      messagingSenderId: "22652249236",
      appId: "1:22652249236:web:618de316359d6637c70081"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"  + Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;    
      //End code
      });});}
getData();


function logout()
{
      window.location = "index.html";
      document.getElementById("user_name").value = "";
}

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function rediectToRoomName(){
      localStorage.setItem("Room_Name", Room_names);
      window.location = "kwitter_page.html";
}
