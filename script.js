var objPeople = [
  { // Object 0 index
    username: "AyushG",
    password: "222"
  },
  { // Object 1 index
    username: "ABD",
    password: "102"
  },
  { // Object 2 index
    username: "TYU",
    password: "289"
  }

]

function getInfo() {
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value

  for(var i = 0; i < objPeople.length; i++) {
    // check if user input matches username and password of a current index of the objPeople array
    if(username == objPeople[i].username && password == objPeople[i].password) {
      window.location.replace("index-5.html");
      //console.log(username + " is logged in!!!");
      // stop the function if this is found to be true
      return
    }
  }
  console.log("incorrect username or password")
}
function homePage() {
  window.location.replace("index.html");
  return
}
