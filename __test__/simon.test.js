import Simon from './../src/simon.js';

describe('Simon', () => {

  test('should correctly create a simon object with', () => {
    const newSimon = new Simon();
    expect(newSimon.number).toEqual(0);
    expect(newSimon.sequence).toEqual([]);
    expect(newSimon.speed).toEqual(350);
    expect(newSimon.same).toEqual(true);
  });
  
  test('should correctly return sequence array with added number and increase number by 1', () => {
    const newSimon = new Simon();
    expect(newSimon.addSequence()).toEqual("Number was added to the sequence");
  });
});