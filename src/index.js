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

function showSequence() {
  let timeout = rightSequence.speed;
  let delay = 1000;

  for (let i = 0; i < rightSequence.number; i++) {
    switch (rightSequence.sequence[i]) {
    case 0:
      setTimeout(function () {
        $("button#green").css("opacity", "1");
      }, i * 2 * timeout + delay);
      setTimeout(function () {
        $("button#green").css("opacity", "0.8");
      }, (i * 2 + 1) * timeout + delay);
      break;
    case 1:
      setTimeout(function () {
        $("button#red").css("opacity", "1");
      }, i * 2 * timeout + delay);
      setTimeout(function () {
        $("button#red").css("opacity", "0.8");
      }, (i * 2 + 1) * timeout + delay);
      break;
    case 2:
      setTimeout(function () {
        $("button#blue").css("opacity", "1");
      }, i * 2 * timeout + delay);
      setTimeout(function () {
        $("button#blue").css("opacity", "0.8");
      }, (i * 2 + 1) * timeout + delay);
      break;
    case 3:
      setTimeout(function () {
        $("button#yellow").css("opacity", "1");
      }, i * 2 * timeout + delay);
      setTimeout(function () {
        $("button#yellow").css("opacity", "0.8");
      }, (i * 2 + 1) * timeout + delay);
      break;
    }
  }
}

function checkSame (){
  if (!rightSequence.same) {
    error();
    userSequence = rightSequence.clearSequences(userSequence);
    rightSequence.addSequence();
    showSequence();
  } else if (userSequence.length == rightSequence.number && rightSequence.same) {
    userSequence = [];
    rightSequence.addSequence();
    showSequence();
  }
}


function error() {
  $("#error").show();
  setTimeout(function () {
    $("#error").hide();
  }, 1500);
}

$("#start").click(function () {
  userSequence = rightSequence.clearSequences(userSequence);
  rightSequence.addSequence();
  showSequence();
  display();
});


$("#green").click(function () {
  userSequence.push(0);
  userSequence = rightSequence.compareSequence(userSequence);
  checkSame();
  display();
});

$("#red").click(function () {
  userSequence.push(1);
  userSequence = rightSequence.compareSequence(userSequence);
  checkSame();
  display();
});

$("#blue").click(function () {
  userSequence.push(2);
  userSequence = rightSequence.compareSequence(userSequence);
  checkSame();
  display();
});

$("#yellow").click(function () {
  userSequence.push(3);
  userSequence = rightSequence.compareSequence(userSequence);
  checkSame();
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
