window.onpopstate = function (event) {
  document.querySelector("#posts-div").style.display = "block";
  document.querySelector("#newpost-div").style.display = "none";
  document.querySelector("#newpost-button").disabled = false;
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
