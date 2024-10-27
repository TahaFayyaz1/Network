window.onpopstate = function (event) {
  document.querySelector("#index_div").style.display = "block";
  document.querySelector("#newpost_div").style.display = "none";
  document.querySelector("#newpost_button").disabled = false;
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#newpost_div").style.display = "none";

  document.querySelector("#newpost_button").onclick = () => {
    document.querySelector("#index_div").style.display = "none";
    document.querySelector("#newpost_div").style.display = "block";
    document.querySelector("#newpost_button").disabled = true;

    history.pushState({}, "", "newpost");
  };
});
