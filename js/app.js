// Tu código aquí

const image = document.querySelector("img");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const country = document.querySelector("#country");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
    

document.querySelector("button");
button = addEventListener("click", async function () {
    const response = await this.fetch("https://randomuser.me/api/");
    const sheet = await response.json();

    console.log("persona nueva: ", sheet.results[0].picture.large);
    console.log("persona nueva: ", sheet.results[0].name.first);
    console.log("persona nueva: ", sheet.results[0].name.last);
    console.log("persona nueva: ", sheet.results[0].location.country);
    console.log("persona nueva: ", sheet.results[0].phone);
    console.log("persona nueva: ", sheet.results[0].email);

    image.src = sheet.results[0].picture.large;
    firstName.textContent = sheet.results[0].name.first;
    lastName.textContent = sheet.results[0].name.last;
    country.textContent = sheet.results[0].location.country;
    phone.textContent = sheet.results[0].phone;
    email.textContent = sheet.results[0].email;
    
});
