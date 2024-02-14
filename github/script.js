let form = document.getElementById("form");
let input = document.getElementById("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = input.value;

  const requestUrl = `https://api.github.com/users/${username}`;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", requestUrl);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);

        document
          .querySelector(".card img")
          .setAttribute("src", response.avatar_url);
        document.querySelector(
          "#name"
        ).innerHTML = `${response.name}, Followers: ${response.followers}`;
        document.querySelector("#name").style.fontWeight = "bold";
        document.querySelector(
          "p"
        ).innerHTML = `${response.bio} ${response.blog}`;
      } else {
        console.log("Error: Incomplete response");
      }
    } else {
      console.log("Error: " + xhr.status);
    }
  };
  xhr.send();
});
