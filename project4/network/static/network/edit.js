document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#edit-button").forEach((button) => {
    button.onclick = () => {
      window.scrollTo(0, 0);
      history.pushState({}, "", "editpost");
      fetch(`/edit/${button.value}`)
        .then((response) => response.json())
        .then((data) => {
          const edit_div = document.querySelector("#edit-div");
          edit_div.style.display = "none";
          while (edit_div.firstChild) {
            document
              .querySelector("#edit-div")
              .removeChild(edit_div.firstChild);
          }
          document.querySelector("#edit-div").style.display = "block";
          document.querySelector("#newpost-button").disabled = true;

          const editarea = document.createElement("textarea");
          const submitbutton = document.createElement("button");
          editarea.innerHTML = data.description;
          submitbutton.innerHTML = "Save Changes";
          editarea.className = "form-control mt-4";
          submitbutton.className = "btn btn-outline-dark mt-3";
          document.getElementById("edit-div").append(editarea);
          document.getElementById("edit-div").append(submitbutton);

          submitbutton.onclick = () => {
            fetch(`/edit/${button.value}`, {
              method: "PUT",
              headers: { "X-CSRFToken": getCookie("csrftoken") },
              mode: "same-origin",
              body: JSON.stringify({
                description: editarea.value,
              }),
            });
            const postElement = document.querySelector(`#post-${button.value}`);
            postElement.innerHTML = editarea.value;
            document.querySelector("#posts-div").style.display = "block";
            const edit_div = document.querySelector("#edit-div");
            edit_div.style.display = "none";
            while (edit_div.firstChild) {
              document
                .querySelector("#edit-div")
                .removeChild(edit_div.firstChild);
            }
            document.querySelector("#newpost-button").disabled = false;

            return false;
          };
        });
    };
  });
});
