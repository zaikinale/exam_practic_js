import analyze from '../index.js';
import fs from 'fs';
import path from 'path';

function runTest(csvFileName) {
  const fixturePath = path.resolve('__fixtures__', csvFileName);
  const data = fs.readFileSync(fixturePath, 'utf-8');
  
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  analyze(data);
  return logSpy.mock.calls.map(call => call[0]);
}

describe('CSV Analyzer', () => {
  test('creatures1.csv output', () => {
    const output = runTest('creatures1.csv');
    expect(output).toEqual([
      'Count: 8',
      'Castles: Город, Лес',
      'Largest hp: вампир',
      'Average damage: гоблин: 3, тролль: 4.5, эльф: 2.5, гном: 2, дракон: 20, орк: 3.5, ведьма: 7, вампир: 10',
      'Strongest creature: вампир'
    ]);
  });

  test('creatures2.csv output', () => {
    const output = runTest('creatures2.csv');
    expect(output).toEqual([
      'Count: 9',
      'Castles: Замок, Оплот',
      'Largest hp: ангел',
      'Average damage: единорог: 20, кентавр: 2.5, копейщик: 2, лучник: 2.5, грифон: 4.5, рыцарь: 7.5, кавалерист: 20, дракон: 47.5, ангел: 50',
      'Strongest creature: ангел'
    ]);
  });
});