// BEGIN: Javascript code for sourcing, and storing the name of the user who enters the site. 

// this script uses the LocalStorage element, rather than a cookie
// This means that it is accessible across all pages, and not just the current page.

var username = localStorage.getItem("username");
      document.getElementById("username").innerHTML = username;
      if(!username){
        username = prompt("It looks like we can't find your name. Please enter your name");
        location.reload();
        localStorage.setItem("username", username);
        
      }
      if(username == null) {
        username = prompt("It looks like we can't find your name. Please enter your name");
        location.reload();
        localStorage.setItem("username", username);
      }
// END: Javascript code for sourcing, and storing the name of the user who enters the site. 
