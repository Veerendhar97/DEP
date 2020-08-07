function getPosts() {
  const url1 = `http://localhost:3000/users/posts/mail`;
  fetch(url1).then((data) => {
    data.json().then((jsonData) => {
      const head = document.getElementById("h3");
      head.innerHTML = `${jsonData.mail}`;
    });
  });

  const res = document.getElementById("posts-div");
  const url2 = `http://localhost:3000/users/posts/all`;
  fetch(url2).then((data) => {
    data.json().then((jsonData) => {
      console.log(jsonData);
      if (jsonData.length === 0) {
        res.innerHTML = "<h2>No Posts</h2>";
      } else {
        for (item of jsonData) {
          var br = document.createElement("br");
          var division = document.createElement("div");
          division.setAttribute("class", "inner-div");
          var undiv = document.createElement("div");
          undiv.setAttribute("class", "undiv");
          undiv.innerHTML = `<span class="label1">User:</span>
                        <span class="value">${" " + item.uname}</span>
                        `;
          division.appendChild(undiv);
          res.appendChild(br);

          var postdiv = document.createElement("div");
          postdiv.innerHTML = `<span class="label2">Post: </span>
                              <span class="value"> ${"  " + item.post}</span>`;
          division.appendChild(postdiv);

          res.appendChild(division);
        }
      }
    });
  });
}
function signout() {
  //  window.location = "/signout";
  location.replace("http://localhost:3000/users/signout");
}
