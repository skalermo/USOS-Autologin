// ==UserScript==
// @name     PW CAS Autologin
// @description     Go through annoying 'Ukryj identyfikator' and autoclick 'Zaloguj'
// @version  1
// @grant    none
// @namespace  https://cas.usos.pw.edu.pl/cas/login
// ==/UserScript==

document.getElementById("vis").checked = false;
document.getElementById("username").type = "text";
setTimeout(function() {document.getElementsByClassName("btn-submit")[0].click();}, 5);