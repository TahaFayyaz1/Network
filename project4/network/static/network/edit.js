document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#edit-button").forEach((button) => {
    button.onclick = () => {
      history.pushState({}, "", "editpost");
      fetch(`/edit/${button.value}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          document.querySelector("#posts-div").style.display = "none";
          document.querySelector("#newpost-button").style.display = "none";
          document.querySelector("#edit-div").style.display = "block";

          const editarea = document.createElement("textarea");
          const submitbutton = document.createElement("button");
          editarea.innerHTML = data.description;
          submitbutton.innerHTML = "Edit";
          document.getElementById("edit-div").appendChild(editarea);
          document.getElementById("edit-div").appendChild(submitbutton);

          submitbutton.onclick = () => {
            fetch(`/edit/${button.value}`, {
              method: "PUT",
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
            document.querySelector("#newpost-div").style.display = "none";
            document.querySelector("#newpost-button").style.display = "block";
            document.querySelector("#newpost-button").disabled = false;
            return false;
          };
        });
    };
  });
});
