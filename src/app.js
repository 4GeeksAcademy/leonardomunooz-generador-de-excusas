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

function excuseGenerator(whoRandom, actionRandom, whatRandom, whenRandom) {
  let who = Math.floor(Math.random() * whoRandom.length);
  let action = Math.floor(Math.random() * actionRandom.length);
  let what = Math.floor(Math.random() * whatRandom.length);
  let when = Math.floor(Math.random() * whenRandom.length);
  return `${whoRandom[who]}  ${actionRandom[action]} ${whatRandom[what]} ${whenRandom[when]} `;
}
