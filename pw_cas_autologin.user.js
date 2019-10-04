// ==UserScript==
// @name     PW CAS Autologin
// @description     Go through annoying 'Ukryj identyfikator' and autoclick 'Zaloguj'
// @version  1.1
// @grant    none
// @include  https://cas.usos.pw.edu.pl/cas/login*
// ==/UserScript==

document.getElementById("vis").checked = false;
document.getElementById("username").type = "text";

// If you web browser doesn't fill in the form automatically you may need to uncomment this line
// document.getElementById("username").value = "your_login";

// Feel free to set other timeout
setTimeout(function() {document.getElementsByClassName("btn-submit")[0].click();}, 20);
