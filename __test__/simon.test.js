import Simon from './../src/simon.js';

describe('Simon', () => {

  test('should correctly create a simon object with', () => {
    const newSimon = new Simon();
    expect(newSimon.number).toEqual(0);
    expect(newSimon.sequence).toEqual([]);
    expect(newSimon.speed).toEqual(350);
    expect(newSimon.same).toEqual(true);
  });
});