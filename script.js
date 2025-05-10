const dynamicText = document.querySelector('.dynamic-text');
const words = ['JONATHAN BAGTAS'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const pauseTime = 2000;

function typeWriter() {
  const currentWord = words[wordIndex];
  let displayedText;

  if (!isDeleting) {
    displayedText = currentWord.substring(0, charIndex + 1);
    charIndex++;
    dynamicText.textContent = displayedText;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeWriter, pauseTime);
      return;
    }
  } else {
    displayedText = currentWord.substring(0, charIndex - 1);
    charIndex--;
    dynamicText.textContent = displayedText;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(typeWriter, typingSpeed);
}
typeWriter();