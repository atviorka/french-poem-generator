function displayRapName(response) {

    new Typewriter('#rapName', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generateRapName(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    console.log(instructionsInput);
    console.log(instructionsInput.value);

    let apiKey = "fb2eo2345t09c60c3a4b1c043a90eee3";
    let prompt = `My favourites are ${instructionsInput.value}`;
    let context = "Generate a funny rapper name based on the favourites. You are a hilarious rapper name generator. Your mission is to write the funny rap name and add a dollar sign for each letter 's' instead (only in the rap name), inside a <h2> element. Please add a <br/> after the rap name add a funny 4 line rap verse related to the name. Add 2 x <br/> after the verse and sign it with 'SheCodes AI' inside a <strong> element - at the end and NOT at the beginning.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let rapNameElement = document.querySelector("#rapName");
    rapNameElement.classList.remove("hidden");
    rapNameElement.innerHTML = `<div class="generating">⏳Generating your rap name based on: ${instructionsInput.value}</div>`;

    axios.get(apiURL).then(displayRapName);

}

let rapNameFormElement = document.querySelector("#rap-name-generator-form");
rapNameFormElement.addEventListener("submit", generateRapName);

