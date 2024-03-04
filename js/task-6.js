function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const createEl = document.querySelector('button[data-create]');
const destroyEl = document.querySelector('button[data-destroy]');
const boxesEl = document.getElementById('boxes');

createEl.addEventListener("click", createBox);

function createBox() {
  const numberValue = parseFloat(inputEl.value);
  if (numberValue >= 1 && numberValue < 100) {
    const boxSize = 30;
    
    boxesEl.innerHTML = '';

    for (let i = 0; i < numberValue; i++) {
      const box = document.createElement("div");

      const size = boxSize + i * 10;

      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();

     

      boxesEl.appendChild(box)

    }
  } else {
    alert("error")
  }
};

destroyEl.addEventListener("click", destroyBox);

function destroyBox() {
  boxesEl.innerHTML = '';
  inputEl.value = "";
}


