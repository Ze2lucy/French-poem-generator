function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "d99e9a025t549f2boab03f4d6b088862";
  let context =
    "You are a romantic poem experct and love to write short poems. Your mission is to generate a 4 line poem and seperate each line with a <br />. Make sure to follow the user instructions. sign the poen with a `shecodes AI` inside a <strong> element"; // Add this if you need a context variable
  let prompt = ` User instructions: Generate a Xhosa poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⌛Generating the Xhosa poem about ${instructionsInput.value} </div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
