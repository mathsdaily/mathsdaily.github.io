// BEGIN: Javascript code for sourcing, and storing the name of the user who enters the site. 
function setCookie(cname,cvalue,exdays) { // This function is used to define the variables, date, and expiry, along with the cookie path
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) { // This function gets the value of the cookie, and then decodes it. The "for(let i = 0)" loop was sourced from W3 schools, and is used to decode characters within the cookie string
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() { // This function simple gets the value, from the decoded value above, and then shows an alert box, with the user's name. If no value is found, it will ask the user to enter their name, and then store this value 
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}
// END: Javascript code for sourcing, and storing the name of the user who enters the site. 
