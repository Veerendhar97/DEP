let current_page = 1;
let records_per_page = 8;
let i = 0;

import { objJson } from "./fetch.js";

function prevPage() {
  //Checks whether previous page exists.If exists decrements page num and calls changePage()

  if (current_page > 1) {
    current_page--;
    changePage(current_page);
  }
}

function nextPage() {
  //Checks whether next page exists.If exists increments page num and calls changePage()

  if (current_page < numPages()) {
    current_page++;
    changePage(current_page);
  }
}

export function changePage(page) {
  //Responsible for populating the page with search results

  let nav = `
      <div><button id="btn_prev" class="nav" >Back</button></div>
     <div><button id="btn_next" class="nav" >Next</button></div>
    <span id="page"></span>`;
  document.getElementById("paginate").innerHTML = nav;
  var btn_next = document.getElementById("btn_next");
  var btn_prev = document.getElementById("btn_prev");
  var listing_table = document.getElementById("listingTable");
  var page_span = document.getElementById("page");
  let output = "";
  if (page <= 1) page = 1;
  if (page > numPages()) page = numPages();

  //
  if (page < numPages()) {
    for (
      var i = (page - 1) * records_per_page;
      i < page * records_per_page;
      i++
    ) {
      output =
        output +
        `<div id="innerdiv1">
              <div >
              <iframe width="401" height="200" src="https://www.youtube.com/embed/${objJson[i].id.videoId} " ></iframe>
              </div>
              <div  id="innerdiv2"> <p id="description">${objJson[i].snippet.title}</p></div> <hr id="line"/>          
              <div  id="innerdiv3"> <p id="description">${objJson[i].snippet.channelTitle}</p></div>
              </div>                     
             `;
    }
    listing_table.innerHTML = output;
  }
  //Handles the case where the records < records_per_page ,if left unhandled, will raise an exception in last page
  else {
    for (i = (page - 1) * records_per_page; i < objJson.length; i++) {
      output =
        output +
        `<div id="innerdiv1">
                  <div >
                  <iframe width="400" height="200" src="https://www.youtube.com/embed/${objJson[i].id.videoId} " ></iframe>
                  </div>
                  <div  id="innerdiv2"> <p id="description">${objJson[i].snippet.title}</p></div><hr id="line"/>
                  <div  id="innerdiv3"> <p id="description">${objJson[i].snippet.channelTitle}</p></div>
                 </div>
                 `;
    }
    listing_table.innerHTML = output;
  }

  if (page == 1) {
    btn_prev.style.visibility = "hidden";
  } else {
    btn_prev.style.visibility = "visible";
  }

  if (page == numPages()) {
    btn_next.style.visibility = "hidden";
  } else {
    btn_next.style.visibility = "visible";
  }
  document.getElementById("btn_next").addEventListener("click", nextPage);
  document.getElementById("btn_prev").addEventListener("click", prevPage);
}

function numPages() {
  return Math.ceil(objJson.length / records_per_page);
}
