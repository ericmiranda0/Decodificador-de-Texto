function demoVisibility() {
  document.getElementById("button-id-copie").style.display = "block";
}
document.getElementById("encryptBtn").addEventListener("click", function () {
  let inputText = document.getElementById("inputText").value;
  let encryptedText = encrypt(inputText);

  displayOutput(encryptedText);
});

document.getElementById("decryptBtn").addEventListener("click", function () {
  let inputText = document.getElementById("inputText").value;
  let decryptedText = decrypt(inputText);
  displayOutput(decryptedText);
});

function encrypt(text) {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function decrypt(text) {
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}
function displayOutput(text) {
  const outputSection = document.querySelector(".right-section h2");
  document.getElementById("text-p").style.display = "none";
  outputSection.textContent = text;
  demoVisibility();
}
document.getElementById("inputText").addEventListener("blur", function () {
  this.style.fontSize = "32px"; // Evite esse tipo de alteração
});
function copyH2Content() {
  const h2Element = document.querySelector(".right-section h2");
  const textToCopy = h2Element.textContent;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      const button = document.getElementById("button-id-copie");
      button.textContent = "Copiado!";
      console.log("Texto copiado para a área de transferência!");
    })
    .catch((err) => {
      console.error("Erro ao copiar o texto: ", err);
    });
}
