const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    
    const infoForm = {
        email: elements.email.value,
        password: elements.password.value,
    }
    
    if (elements.email.value === "" || elements.password.value === "") {
        alert('All form fields must be filled in');
        
    }
    console.log(infoForm);

    event.currentTarget.reset()
}