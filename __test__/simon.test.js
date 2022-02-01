import Simon from "./../src/simon.js";

describe("Simon", () => {
  test("should correctly create a simon object with", () => {
    const newSimon = new Simon();
    expect(newSimon.number).toEqual(0);
    expect(newSimon.sequence).toEqual([]);
    expect(newSimon.speed).toEqual(350);
    expect(newSimon.same).toEqual(true);
  });

  test("should correctly return sequence array with added number and increase number by 1", () => {
    const newSimon = new Simon();
    expect(newSimon.addSequence()).toEqual("Number was added to the sequence");
  });

  test("should correctly determine that sequence entered by user and random sequence are not the same", () => {
    const newSimon = new Simon();
    newSimon.number = 1;
    newSimon.sequence = [0];
    const userSequence = [1];
    expect(newSimon.compareSequence(userSequence)).toEqual("They are not the same");
  });

  test("should correctly determine that sequence entered by user and random sequence are the same", () => {
    const newSimon = new Simon();
    newSimon.number = 1;
    newSimon.sequence = [1];
    const userSequence = [1];
    expect(newSimon.compareSequence(userSequence)).toEqual("They are the same");
  });

  test("should return empty sequence", () => {
    const newSimon = new Simon();
    const userSequence = [1];
    expect(newSimon.clearSequences(userSequence)).toEqual([]);
  });
});
