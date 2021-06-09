
// Get a text message when the username or password is invalid
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.add('form__message--${type}');
}
function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}
function clearInputEror(inputElement, message) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error--message").textContent = message;
}



// Getting variables from HTML
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

 // Creating function where as you click on the link the form changes
 document.querySelector("#linkCreateAccount").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
 });

 document.querySelector("#linkLogin").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
 });
   //*Get a text message when the username or password is invalid
   loginForm.addEventListener("submit", e => {
    e.preventDefault();
   
    
   setFormMessage(loginForm, "error", "Invalid password or username!");

    });
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
           if(e.target.id === "usernameCreate" && e.target.value.length > 0 && e.target.value.length < 5) {
               setInputError(inputElement, "Username must be at least 5 characters in length");
           }
        });
    
    });
   inputElement.addEventListener("input", e =>{
       clearInputEror(inputElement);
   });

});