const myName = document.getElementById("name");
const button = document.getElementById("submit");
const p = document.querySelector("p");

function input(event) {
    event.preventDefault();

    console.log(myName)

    let requestURL = `https://api.agify.io/?name=${myName.value}`
    console.log("input went through")
    let userInput = myName.value;
    if (userInput == "") {
        alert("fill out required input field");
    }
    fetch(requestURL)
// triggered after website sends response
// then, when the fetch request is done...Convert to JSON
    .then(function (response) {
        // convert the response -> object
        return response.json();
    })
    // when we're done converting into an object... do something
    .then(function (getAge) {
        p.innerHTML = getAge.name + "'s " + "Age: " +  getAge.age
        console.log(getAge);
    })

    // checks for erros
    .catch(function (error) {
        console.log("Error during fetch:", error);
    });
}

button.addEventListener("click", input);
