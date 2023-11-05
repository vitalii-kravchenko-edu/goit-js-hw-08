import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector("input");
const message = document.querySelector("textarea");
const data = {};

form.addEventListener("input", throttle(saveInput, 500));
form.addEventListener("submit", onSubmit);

onPageReload();

function saveInput () {
  data.email = email.value;
  data.message = message.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(data));
}

function onSubmit(e) {
  e.preventDefault();
  saveInput();
  console.log(data);
  localStorage.clear();
  form.reset();
}

function onPageReload() {
  const savedData = JSON.parse(localStorage.getItem("feedback-form-state")) ?? {};
  email.value = savedData.email ?? "";
  message.value = savedData.message ?? "";
}