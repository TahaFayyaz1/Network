window.onpopstate = function (event) {
  const edit_div = document.querySelector("#edit-div");
  if (window.location.pathname === "/") {
    edit_div.style.display = "none";
    document.querySelector("#newpost-div").style.display = "none";
    document.querySelector("#newpost-button").disabled = false;
    document.querySelectorAll("#edit-button").forEach((button) => {
      button.disabled = false;
    });
  } else if (window.location.pathname === "/editpost") {
    edit_div.style.display = "block";
    document.querySelector("#newpost-button").disabled = true;
  } else if (window.location.pathname === "/newpost") {
    document.querySelector("#newpost-div").style.display = "block";
    document.querySelector("#newpost-button").disabled = true;
    document.querySelectorAll("#edit-button").forEach((button) => {
      button.disabled = true;
    });
  } else {
    edit_div.style.display = "none";
    document.querySelector("#newpost-div").style.display = "none";
    document.querySelector("#newpost-button").disabled = false;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#newpost-div").style.display = "none";

  document.querySelector("#newpost-button").onclick = () => {
    document.querySelectorAll("#edit-button").forEach((button) => {
      button.disabled = true;
    });
    document.querySelector("#newpost-div").style.display = "block";
    document.querySelector("#newpost-button").disabled = true;

    history.pushState({}, "", "newpost");
  };
});
