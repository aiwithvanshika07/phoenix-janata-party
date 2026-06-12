const aiMessages = [
  "AI Thinking: Decoding youth energy...",
  "AI Thinking: Finding courage patterns...",
  "AI Thinking: Building phoenix narrative...",
  "AI Thinking: Transforming anger into action...",
  "AI Thinking: Campaign message optimized..."
];

let messageIndex = 0;
const aiText = document.getElementById("aiText");

setInterval(() => {
  messageIndex = (messageIndex + 1) % aiMessages.length;
  aiText.textContent = aiMessages[messageIndex];
}, 2200);

const typingLine = document.getElementById("typingLine");
const finalText = "> Final Output: GenZ Are Phoenixes. They rise, think, rebuild, and lead.";

let charIndex = 0;

function typeEffect() {
  if (charIndex < finalText.length) {
    typingLine.textContent += finalText.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 55);
  }
}

setTimeout(typeEffect, 1200);

function copyText(button) {
  const cardText = button.parentElement.innerText.replace("Copy", "").trim();

  navigator.clipboard.writeText(cardText).then(() => {
    button.textContent = "Copied!";
    setTimeout(() => {
      button.textContent = "Copy";
    }, 1400);
  });
    }
