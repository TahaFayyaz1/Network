window.onpopstate = function (event) {
  if (window.location.pathname === "/") {
    document.querySelector("#posts-div").style.display = "block";
    const edit_div = document.querySelector("#edit-div");
    edit_div.style.display = "none";
    while (edit_div.firstChild) {
      document.querySelector("#edit-div").removeChild(edit_div.firstChild);
    }
    document.querySelector("#newpost-div").style.display = "none";
    document.querySelector("#newpost-button").style.display = "block";
    document.querySelector("#newpost-button").disabled = false;
  } else if (window.location.pathname === "/editpost") {
    document.querySelector("#posts-div").style.display = "none";
    edit_div.style.display = "block";
  } else if (window.location.pathname === "/newpost") {
    document.querySelector("#posts-div").style.display = "none";
    document.querySelector("#newpost-div").style.display = "block";
    document.querySelector("#newpost-button").disabled = true;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#newpost-div").style.display = "none";

  document.querySelector("#newpost-button").onclick = () => {
    document.querySelector("#posts-div").style.display = "none";
    document.querySelector("#newpost-div").style.display = "block";
    document.querySelector("#newpost-button").disabled = true;

    history.pushState({}, "", "newpost");
  };
});
