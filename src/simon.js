export default function Simon() {
  this.number = 0;
  this.sequence = [];
  this.speed = 350;
}

Simon.prototype.addSequence = function () {
  this.sequence.push(Math.floor(Math.random() * 4));
  this.number++;
};

Simon.prototype.showSequence = function () {
  let timeout = this.speed;
  let delay = 1000;

  for (let i = 0; i < this.number; i++) {
    switch (this.sequence[i]) {
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
};

Simon.prototype.compareSequence = function (checkSequence) {
  let same = true;
  for (let i = 0; i < this.number; i++) {
    if (this.sequence[i] !== checkSequence[i]) {
      same = false;
      if (checkSequence[i] === undefined) {
        same = true;
      }
      break;
    }
  }
  if (!same) {
    $("#error").show();
    setTimeout(function () {
      $("#error").hide();
    }, 800);
    checkSequence = this.clearSequences(checkSequence);
    this.addSequence();
    this.showSequence();
  } else if (checkSequence.length == this.number && same) {
    checkSequence = [];
    this.addSequence();
    this.showSequence();
  }

  return checkSequence;
};

Simon.prototype.clearSequences = function (uSequence) {
  this.number = 0;
  this.sequence = [];
  uSequence = [];

  return uSequence;
};
