var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var emailErrorMsg = document.querySelector(".error-msg-email");
var passwordErrorMsg = document.querySelector(".error-msg-passwd");
var emailErrorMsgR = document.querySelector(".error-msg-email-R");
var passwordErrorMsgR = document.querySelector(".error-msg-passwd-R");
var passwordCnErrorMsg = document.querySelector(".error-msg-passwdcn");
var passwdLoginRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
let userNameRe = /\w+@\w+.\w+/gi;

// functions for toggle btn
function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}
function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
}
//functions for validation
function loginF() {
  let passwdLogin = document.querySelector(".passwordL");
  let userName = document.querySelector(".emailL");

  if (
    userNameRe.test(userName.value) &&
    passwdLoginRe.test(passwdLogin.value)
  ) {
    localStorage.setItem("username", userName.value);
    localStorage.setItem("password", passwdLogin.value);
    emailErrorMsg.style.display = "none";
    passwordErrorMsg.style.display = "none";
    return true;
  } else if (
    userNameRe.test(userName.value) != true &&
    passwdLoginRe.test(passwdLogin.value)
  ) {
    emailErrorMsg.style.display = "block";
    passwordErrorMsg.style.display = "none";
  } else if (
    userNameRe.test(userName.value) &&
    passwdLoginRe.test(passwdLogin.value) != true
  ) {
    emailErrorMsg.style.display = "none";
    passwordErrorMsg.style.display = "block";
  } else if (
    userNameRe.test(userName.value) != true &&
    passwdLoginRe.test(passwdLogin.value) != true
  ) {
    emailErrorMsg.style.display = "block";
    passwordErrorMsg.style.display = "block";
  }
  return false;
}
function registerF() {
  let passwdRegis = document.querySelector(".passwordR");
  let userNameRegis = document.querySelector(".emailR");
  let passwdConf = document.querySelector(".passwordcn");
  if (
    userNameRe.test(userNameRegis.value) &&
    passwdLoginRe.test(passwdRegis.value) &&
    passwdConf.value == passwdRegis.value
  ) {
    emailErrorMsgR.style.display = "none";
    passwordErrorMsgR.style.display = "none";
    passwordCnErrorMsg.style.display = "none";
    return true;
  } else if (
    userNameRe.test(userNameRegis.value) != true &&
    passwdLoginRe.test(passwdRegis.value) &&
    passwdConf.value == passwdRegis.value
  ) {
    emailErrorMsgR.style.display = "block";
    passwordErrorMsgR.style.display = "none";
    passwordCnErrorMsg.style.display = "none";
  } else if (
    userNameRe.test(userNameRegis.value) &&
    passwdLoginRe.test(passwdRegis.value) != true &&
    passwdConf.value == passwdRegis.value
  ) {
    emailErrorMsgR.style.display = "none";
    passwordErrorMsgR.style.display = "block";
    passwordCnErrorMsg.style.display = "none";
  } else if (
    userNameRe.test(userNameRegis.value) &&
    passwdLoginRe.test(passwdRegis.value) &&
    passwdConf.value != passwdRegis.value
  ) {
    emailErrorMsgR.style.display = "none";
    passwordErrorMsgR.style.display = "none";
    passwordCnErrorMsg.style.display = "block";
  } else if (
    userNameRe.test(userNameRegis.value) != true &&
    passwdLoginRe.test(passwdRegis.value) != true &&
    passwdConf.value == passwdRegis.value
  ) {
    emailErrorMsgR.style.display = "block";
    passwordErrorMsgR.style.display = "block";
    passwordCnErrorMsg.style.display = "none";
  }
  return false;
}
