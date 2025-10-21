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
    let prompt = `User instructions: generate a funny rapper name based on submitted favourite colour & snack in ${instructionsInput}`;
    let context = "You are a hilarious rapper name generator. Please ensure the rap name is based on what's being submitted in the form via ${instructionsInput}. Your mission is to write the funny rap name in HTML format (do not include markdown in your response) and add a dollar sign for each letter 's' instead (only in the rap name), inside a <strong> element. Please add a <br/> after the rap name and add a funny 4 line rap verse. Sign the rap name & verse with 'SheCodes AI' inside a <strong> element at the end of the rap name and NOT at the beginning";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiURL).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

