export default function Simon() {
  // this.number = 0;
  // this.sequence = [];
  // this.speed = 350;
  // this.same = true;
}

Simon.prototype.addSequence = function () {
  this.sequence.push(Math.floor(Math.random() * 4));
  this.number++;
};

Simon.prototype.compareSequence = function (checkSequence) {
  for (let i = 0; i < this.number; i++) {
    if (this.sequence[i] !== checkSequence[i]) {
      this.same = false;
      if (checkSequence[i] === undefined) {
        this.same = true;
      }
      break;
    }
  }
  console.log("compare");
  return checkSequence;
};

Simon.prototype.clearSequences = function (uSequence) {
  this.number = 0;
  this.sequence = [];
  uSequence = [];

  return uSequence;
};
