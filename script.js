let pwd = "";
let pwd_conf = "";
let error_flag = false;
const pwd_input = document.getElementById("pwd");
const pwd_input_conf = document.getElementById("pwd_conf");
let btn_disable = (document.querySelector("#button").disabled = false);

function setErrorBorder(item, set) {
  if (set) {
    item.classList.add("error-border-color");
  } else {
    item.classList.remove("error-border-color");
  }
  return true;
}

pwd_input.addEventListener("input", (e) => {
  pwd = e.target.value;
});

function setFocusOutPwd() {
  pwd_input_conf.addEventListener("focusout", (e) => {
    const error_pwd = document.getElementById("error-pwd");
    if (pwd != pwd_conf && pwd != "") {
      console.log("visible");
      error_pwd.style.visibility = "visible";
      setErrorBorder(pwd_input, true);
      setErrorBorder(pwd_input_conf, true);
      btn_disable = false;
      error_flag = true;
    } else {
      console.log("hidden");
      error_pwd.style.visibility = "hidden";
      setErrorBorder(pwd_input, false);
      setErrorBorder(pwd_input_conf, false);
      btn_disable = true;
    }
    console.log(pwd, pwd_conf);
  });
}
setFocusOutPwd();

pwd_input_conf.addEventListener("input", (e) => {
  const error_pwd = document.getElementById("error-pwd");
  pwd_conf = e.target.value;
  if (error_flag) {
    if (pwd_conf == pwd) {
      btn_disable = false;
      error_pwd.style.visibility = "hidden";
      setErrorBorder(pwd_input, false);
      setErrorBorder(pwd_input_conf, false);
    } else {
      error_pwd.style.visibility = "visible";
      setErrorBorder(pwd_input, true);
      setErrorBorder(pwd_input_conf, true);
      btn_disable = true;
    }
  }
});

function showPass() {
  if (pwd_input.type === "password") {
    pwd_input.type = "text";
    pwd_input_conf.type = "text";
  } else {
    pwd_input.type = "password";
    pwd_input_conf.type = "password";
  }
}

function setError() {
  var form = document.getElementById("form");
  if (form.checkValidity() == false) {
    var list = form.querySelectorAll(":invalid");
    list.forEach((item) => {
      setErrorBorder(item, true);
      item.addEventListener("focusout", (e) => {
        setErrorBorder(item, false);
        if (item.name == "pwd_conf") {
          setFocusOutPwd();
        }
      });
    });
  }
}
