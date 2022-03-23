
// Première partie open close
//___________________________________________________________________________________________________________________________________


// DOM Elements
const modalbg = document.querySelector(".bground");
const formulary = document.querySelector("form");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close"); //constant which retrieves the element corresponding to the cross
const btnClose = document.querySelector(".btn-close");

// launch modal event
//modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

displayModal(){ formulary.style.display = "block";
}

// launch modal form and reset data
function launchModal() {
  formulary.reset();
  formulary.style.display = "block"; // to be sure that the formulary is displayed in any cases
  dataSent.style.display = "none"; // to remove data sent message if we want to do another registration
  for (let step = 0; step < 5; step++) {
    formularyData[step].removeAttribute("data-error-visible");
  } // to remove borders by default instead of red or blue
  modalbg.style.display = "block";
}

//waiting for a click on the close class and then launching the function closeModal
close.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);

//function allowing to close the modal when clicking on the cross
function closeModal(disabled) {
  modalbg.style.display = "none";
}





// Deuxième partie validation
//___________________________________________________________________________________________________________________________________


// DOM constants definitions
const content = document.querySelector(".content");

const formularyData = document.querySelectorAll(".formData");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const numberOfContests = document.querySelector("#quantity");
const location1 = document.querySelector("#location1");
const location2 = document.querySelector("#location2");
const location3 = document.querySelector("#location3");
const location4 = document.querySelector("#location4");
const location5 = document.querySelector("#location5");
const location6 = document.querySelector("#location6");
const termsAndConditions = document.querySelector("#checkbox1");
const buttonSubmit = document.querySelector(".btn-submit");
const formError = document.querySelector(".formError");
const dataSent = document.querySelector(".data-sent");
// Regex const definition
const regexName = /^[a-zA-Z-\s]+$/;
const regexEmail = /([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})/;
const regexBirthDate = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
const regexNumber = /^([0-9]|[1-9][0-9]|)$/;

// To prevent default submission of the formulary and thus allow our validate function to check it first
formulary.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

// listening to the keyboard input to help the customer

firstName.addEventListener("input", function (e) {
  let value = e.target.value;
  if (value.trim().length >= 2 && regexName.test(value)) {
    formularyData[0].setAttribute("data-error-visible", "false");
  } else {
    formularyData[0].setAttribute("data-error-visible", "true");
  }
});

lastName.addEventListener("input", function (e) {
  let value = e.target.value;
  if (value.trim().length >= 2 && regexName.test(value)) {
    formularyData[1].setAttribute("data-error-visible", "false");
  } else {
    formularyData[1].setAttribute("data-error-visible", "true");
  }
});

email.addEventListener("input", function (e) {
  let value = e.target.value;
  if (regexEmail.test(value)) {
    formularyData[2].setAttribute("data-error-visible", "false");
  } else {
    formularyData[2].setAttribute("data-error-visible", "true");
  }
});

// The big validation function that test all input values
function validate() {
  let numberOfErrors = 0;

  if (firstName.value.trim().length >= 2 && regexName.test(firstName.value)) {
    formularyData[0].setAttribute("data-error-visible", "false");
  } else {
    formularyData[0].setAttribute("data-error-visible", "true");
    numberOfErrors++;
  }

  if (lastName.value.trim().length >= 2 && regexName.test(lastName.value)) {
    formularyData[1].setAttribute("data-error-visible", "false");
  } else {
    formularyData[1].setAttribute("data-error-visible", "true");
    numberOfErrors++;
  }

  if (regexEmail.test(email.value)) {
    formularyData[2].setAttribute("data-error-visible", "false");
  } else {
    formularyData[2].setAttribute("data-error-visible", "true");
    numberOfErrors++;
  }
  if (regexBirthDate.test(birthDate.value)) {
    formularyData[3].setAttribute("data-error-visible", "false");
  } else {
    formularyData[3].setAttribute("data-error-visible", "true");
    numberOfErrors++;
  }

  if (
    regexNumber.test(numberOfContests.value) &&
    numberOfContests.value !== ""
  ) {
    formularyData[4].setAttribute("data-error-visible", "false");
  } else {
    formularyData[4].setAttribute("data-error-visible", "true");
    numberOfErrors++;
  }

  if (
    location1.checked ||
    location2.checked ||
    location3.checked ||
    location4.checked ||
    location5.checked ||
    location6.checked
  ) {
    formularyData[5].setAttribute("data-error-visible", "false");
  } else {
    formularyData[5].setAttribute("data-error-visible", "true");
    numberOfErrors++;
  }

  if (termsAndConditions.checked) {
    formularyData[6].setAttribute("data-error-visible", "false");
  } else {
    formularyData[6].setAttribute("data-error-visible", "true");
    numberOfErrors++;
  }

  //console.log(numberOfErrors);

  if (numberOfErrors > 0) {
    formError.style.opacity = "1";
  } else {
    formulary.style.display = "none";
    dataSent.style.display = "flex";
  }
}


