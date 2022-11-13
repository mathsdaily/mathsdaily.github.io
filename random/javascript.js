
// BEGIN: Javascript code for sourcing, and storing the name of the user who enters the site. 

// this script uses the LocalStorage element, rather than a cookie
// This means that it is accessible across all pages, and not just the current page.

// This variable is used to store the username, which is sourced from the LocalStorage element
var username = localStorage.getItem("username");
      // This variable is used to display the username in the HTML document
      document.getElementById("username").innerHTML = username;
      // This variable is used to check if the username is stored in the LocalStorage element
      if(!username){
        // This variable is used to prompt the user to enter their username if it is not stored in the LocalStorage element
        username = prompt("It looks like we can't find your name. Please enter your name");
        // This variable reloads the page
        location.reload();
        // This variable is used to store the username in the LocalStorage element
        localStorage.setItem("username", username);
        
      }
      // This variable is used to check if the username is stored in the LocalStorage element
      if(username == null) {
        // This variable is used to prompt the user to enter their username if it is not stored in the LocalStorage element
        username = prompt("It looks like we can't find your name. Please enter your name");
        // This variable reloads the page
        location.reload();
        // This variable is used to store the username in the LocalStorage element
        localStorage.setItem("username", username);
      }

// END: Javascript code for sourcing, and storing the name of the user who enters the site. 
