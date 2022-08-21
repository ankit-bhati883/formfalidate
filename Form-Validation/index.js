$(document).ready(function () {
  $("#usernamevalidation").hide();
  $("#passwordvalidation").hide();
  $("#confirmpasswordvalidation").hide();

  var Error = true;
  var password_error = true;
  var confirm_password_error = true;
  var emailError = true;

  $("#username").keyup(function () {
    username_validation();
  });

  function username_validation() {
    var username_val = $("#username").val();
    const usernameRegex = new RegExp(/^[a-z0-9_-]{3,10}$/gim);
    if (username_val.length == 0) {
      $("#usernamevalidation").show();
      $("#usernamevalidation").html("Username cannot be empty");
      $("#usernamevalidation").css("color", "red");
      Error = false;
      return false;
    } else if (!usernameRegex.test(username_val)) {
      $("#usernamevalidation").show();
      $("#usernamevalidation").text("Invalid Username");
      $("#usernamevalidation").css("color", "red");
      Error = false;
      return false;
    } else {
      $("#usernamevalidation").hide();
    }

    if (username_val.length < 3 || username_val.length > 10) {
      $("#usernamevalidation").show();
      $("#usernamevalidation").html("Invalid Username");
      $("#usernamevalidation").css("color", "red");
      Error = false;
      return false;
    } else {
      $("#usernamevalidation").hide();
    }
  }

  $("#email").keyup(() => {
    emailValidation();
  });

  const emailValidation = () => {
    let emailValue = $("#email").val();
    const emailRegex = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    if (emailValue.length === 0) {
      $("#emailvalidation").show();
      $("#emailvalidation").html("Email id can't be empty");
      $("#emailvalidation").css("color", "red");
      emailError = false;
      return false;
    } else if (!emailRegex.test(emailValue)) {
      $("#emailvalidation").show();
      $("#emailvalidation").html("Email id can't be empty");
      $("#emailvalidation").css("color", "red");
      emailError = false;
      return false;
    } else {
      $("#emailvalidation").hide();
    }
  };

  $("#password").keyup(function () {
    password_validation();
  });

  function password_validation() {
    var password_val = $("#password").val();
    if (password_val.length == 0) {
      $("#passwordvalidation").show();
      $("#passwordvalidation").html("Password cannot be empty");
      $("#passwordvalidation").css("color", "red");

      password_error = false;
      return false;
    } else {
      $("#passwordvalidation").hide();
    }

    if (password_val.length <= 8) {
      $("#passwordvalidation").show();
      $("#passwordvalidation").html("Password length should be 8");
      $("#passwordvalidation").css("color", "red");

      password_error = false;
      return false;
    } else {
      $("#passwordvalidation").hide();
    }
  }

  $("#confirmpassword").keyup(function () {
    confirm_password();
  });

  function confirm_password() {
    var confirm_password_val = $("#confirmpassword").val();
    var password_val = $("#password").val();
    if (confirm_password_val.length === 0) {
      $("#confirmpasswordvalidation").show();
      $("#confirmpasswordvalidation").text("Confirm Password cannot be empty");
      $("#confirmpasswordvalidation").css("color", "red");
      confirm_password_error = false;
    } else if (confirm_password_val != password_val) {
      $("#confirmpasswordvalidation").show();
      $("#confirmpasswordvalidation").html("Password not matching");
      $("#confirmpasswordvalidation").css("color", "red");
      confirm_password_error = false;
      return false;
    } else {
      $("#confirmpasswordvalidation").hide();
    }
  }

  $("#submitvalidation").click(function () {
    username_validation();
    password_validation();
    confirm_password();
    emailValidation();

    if (
      Error == true &&
      password_error == true &&
      confirm_password_error == true &&
      emailError == true
    ) {
      return true;
    } else {
      return false;
    }
  });
});
