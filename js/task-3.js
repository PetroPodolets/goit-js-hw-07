const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");


inputEl.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() !== "") {
        outputEl.textContent = event.currentTarget.value;
    } else {
        outputEl.textContent = "Anonymous"
    }
});


 