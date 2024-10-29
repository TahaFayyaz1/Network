document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".post-likes").forEach((element) => {
    fetch(`/likes/${element.dataset.id}`)
      .then((response) => response.json())
      .then((data) => {
        element.innerHTML = data.length;
      });
  });
  document.querySelectorAll("#like-button").forEach((button) => {
    fetch(`/likes/${button.dataset.postid}`)
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (button.dataset.user == data[i].user_id) {
            button.innerHTML = "🩷";
          } else {
            button.innerHTML = "♡";
          }
        }
        button.onclick = () => {
          let does_user_like = true;
          likep = document.querySelector(
            `#post-likes-${button.dataset.postid}`
          );
          if (button.innerHTML === "♡") {
            button.innerHTML = "🩷";
            does_user_like = true;
            likep.innerHTML = Number(likep.innerHTML) + 1;
          } else {
            button.innerHTML = "♡";
            does_user_like = false;
            likep.innerHTML = Number(likep.innerHTML) - 1;
          }
          fetch(`/likes/${button.dataset.postid}`, {
            method: "PUT",
            headers: { "X-CSRFToken": getCookie("csrftoken") },
            mode: "same-origin",
            body: JSON.stringify({
              does_user_like: does_user_like,
            }),
          });
        };
      });
  });
});

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
