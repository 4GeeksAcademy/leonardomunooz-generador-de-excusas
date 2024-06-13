/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let excusaGenerada = excuseGenerator(who, action, what, when);
  let excusa = document.getElementById("excusa");
  excusa.innerHTML = excusaGenerada;
};

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function excuseGenerator(who, action, what, when) {
  return `${randomWord(who)}  ${randomWord(action)} ${randomWord(
    what
  )} ${randomWord(when)} `;
}

function randomWord(arrWord) {
  let result = Math.floor(Math.random() * arrWord.length);
  return arrWord[result];
}
