import { changePage } from "./pagination.js";

export var objJson = [];

let searchspace = `
<div class="top">
<div class="search">
  <input id="input" />
  <hr id="line-in-search"/>
  <button id="button">Search</button>
</div>
</div>
<hr />
<div id="listingTable"></div>
<div id="paginate"></div>`;
document.getElementById("body").innerHTML = searchspace;

function getData() {
  let value = document.getElementById("input").value.trim();
  var url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAq0AXT6tMRcAa2USyFTLCzvwE3QpJ0qcY&type=video&part=snippet&maxResults=30&q=${value}`;

  if (value != "")
    fetch(url)
      .then(function(res) {
        console.log("then1");
        return res.json();
      })
      .then(function(data) {
        console.log(data);
        let output = "";
        let datum = data.items;
        objJson = [];
        for (let post of datum) {
          objJson.push(post);
        }
        console.log("then2");
        changePage(1);
      });
}
document.getElementById("button").addEventListener("click", getData);
