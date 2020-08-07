function getData() {
  fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
      var para = document.createElement("p");
      para.innerHTML = `
     <h3> Name:</h3> ${data.firstName + " "}${data.lastName}</br>
     <h3> Email:</h3>${data.email}</br>
     <h3> Adress:</h3>
      ${data.address.streetAddress}</br>
              ${data.address.city}</br>
              ${data.address.state}</br>
              ${data.address.postalCode}`;

      var element = document.getElementById("main");
      element.appendChild(para);
    });
}
