import View from "./View.js";
import Client from "./Client.js";

// All of your javascript should go here
console.log("Hello from index.js");

const input = document.querySelector("input");
const saveBtn = document.querySelector(".btn-save");
const resetBtn = document.querySelector(".btn-reset");

const newClient = new Client();
const view = new View();

let savedArray = [];

loadTodos();

input.addEventListener("change", async () => {
  if (input.value) {
    // console.log(input.value);

    const data1 = await newClient.getMovieData(input.value);

    savedArray.push(data1);
    view.displayMovieOnPage(data1);
    console.log(savedArray);
  }
});

saveBtn.addEventListener("click", () => {
  localStorage.setItem("movies", JSON.stringify(savedArray));
});

resetBtn.addEventListener("click", () => {
  view.removeDisplay();
  localStorage.removeItem("movies");
  //   savedArray = [];
  savedArray.splice(0);
});

function loadTodos() {
  const localStorageItems = localStorage.getItem("movies");
  const parsed = JSON.parse(localStorageItems);

  if (localStorageItems) {
    savedArray.push(...parsed);
    savedArray.forEach((item) => {
      //   const li = document.createElement("li");
      //   console.log(item);
      //   li.textContent = item;
      //   todoList.appendChild(li);
      view.displayMovieOnPage(item);
    });
  }
}
