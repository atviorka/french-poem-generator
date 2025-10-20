function displayPoem(response) {

        console.log("poem generated");



    new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");

    let apiKey = "fb2eo2345t09c60c3a4b1c043a90eee3";
    let prompt = `User instructions: generate a French poem about ${instructionsInput}`;
    let context = "You are a romantic Poem expert and love to write short poems. Your mission is to generate a four line poem, please add an HTML <br> line break after each line. Make sure to follow the user instructions and do not display anythign extra - only the poem itself."
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiURL).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

