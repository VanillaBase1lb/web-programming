function checkLoginCredentials() {
  let inputEmail = document.getElementById("email").value;
  let inputPassword = document.getElementById("password").value;

  let correctEmail = "yuvraj@email.com";
  let correctPassword = "password123";
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (inputEmail.match(emailRegex)) {
    if (inputEmail === correctEmail && inputPassword === correctPassword) {
      return true;
    } else {
      alert("Wrong email or password");
      return false;
    }
  } else {
    alert("Invalid email.");
    return false;
  }
}
