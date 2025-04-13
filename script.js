// script.js – Active les fonctions du site GeniusCash AI

// Ouverture du chat IA "Le Coach Business"
document.addEventListener("DOMContentLoaded", function () {
  const chatButton = document.getElementById("chat-btn");
  const chatPopup = document.getElementById("chat-popup");
  const closeBtn = document.getElementById("close-chat");

  if (chatButton && chatPopup && closeBtn) {
    chatButton.addEventListener("click", () => {
      chatPopup.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      chatPopup.style.display = "none";
    });
  }
});

// Exemple de simulation IA (à remplacer plus tard par vraie IA)
function envoyerMessage() {
  const input = document.getElementById("message");
  const messages = document.getElementById("messages");

  if (input.value.trim() !== "") {
    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.innerText = input.value;
    messages.appendChild(userMessage);

    const botMessage = document.createElement("div");
    botMessage.className = "message bot";
    botMessage.innerText = "Voici une super idée de business pour toi 🚀...";
    setTimeout(() => {
      messages.appendChild(botMessage);
      messages.scrollTop = messages.scrollHeight;
    }, 1000);

    input.value = "";
  }
}
