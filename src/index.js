import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Simon from "./simon.js";

let userSequence = [];
let rightSequence = new Simon();

function display() {
  if(rightSequence.number > 0) {
    $("#display").html(rightSequence.number - 1);
  }
}
$("#display").html(rightSequence.number);

$("#green").click(function () {
  userSequence.push(0);
  userSequence = rightSequence.compareSequence(userSequence);
  display();
});

$("#red").click(function () {
  userSequence.push(1);
  userSequence = rightSequence.compareSequence(userSequence);
  display();
});

$("#blue").click(function () {
  userSequence.push(2);
  userSequence = rightSequence.compareSequence(userSequence);
  display();
});

$("#yellow").click(function () {
  userSequence.push(3);
  userSequence = rightSequence.compareSequence(userSequence);
  display();
});

$("#start").click(function () {
  userSequence = rightSequence.clearSequences(userSequence);
  rightSequence.addSequence();
  rightSequence.showSequence();
  display();
});

$("#slow").click(function () {
  rightSequence.speed = 500;
});

$("#fast").click(function () {
  rightSequence.speed = 250;
});

$("#normal").click(function () {
  rightSequence.speed = 350;
});
