const snippets = {
  typewriter: `.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #60a5fa;
  animation: typing 2.5s steps(7) infinite,
             blink .7s step-end infinite;
}
@keyframes typing {
  from { width: 0; }
  to { width: 7ch; }
}
@keyframes blink {
  50% { border-color: transparent; }
}`,
  fade: `.fade-up {
  animation: fadeUp 2s ease-in-out infinite;
}
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}`,
  glow: `.glow {
  color: #00eaff;
  text-shadow: 0 0 5px #00eaff,
               0 0 10px #00eaff,
               0 0 20px #00eaff;
  animation: glowPulse 1.5s ease-in-out infinite alternate;
}
@keyframes glowPulse {
  from { text-shadow: 0 0 5px #00eaff; }
  to {
    text-shadow: 0 0 10px #00eaff,
                 0 0 25px #00eaff,
                 0 0 40px #00eaff;
  }
}`,
  bounce: `.bounce span {
  display: inline-block;
  animation: bounce 1s ease-in-out infinite;
}
.bounce span:nth-child(2) { animation-delay: .1s; }
.bounce span:nth-child(3) { animation-delay: .2s; }
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}`,
  wave: `.wave span {
  display: inline-block;
  animation: wave 1.2s ease-in-out infinite;
}
.wave span:nth-child(2) { animation-delay: .08s; }
.wave span:nth-child(3) { animation-delay: .16s; }
@keyframes wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}`
};

document.querySelectorAll(".copy-btn").forEach(button => {
  button.addEventListener("click", async () => {
    const original = button.textContent;
    try {
      await navigator.clipboard.writeText(snippets[button.dataset.snippet]);
      button.textContent = "Copied!";
    } catch {
      button.textContent = "Copy blocked";
    }
    window.setTimeout(() => button.textContent = original, 1300);
  });
});

// Split the wave heading into individual spans so each character can animate independently.
document.querySelectorAll(".wave").forEach(element => {
  const text = element.textContent.trim();
  element.textContent = "";
  [...text].forEach(char => {
    const span = document.createElement("span");
    span.textContent = char;
    element.appendChild(span);
  });
});
