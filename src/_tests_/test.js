import definitionHealth from '../definitionHealth';

const masHero = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

test('testing definitionHealth function with %s post and %i health', () => {
  const resultMas = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const result = definitionHealth(masHero);
  expect(resultMas).toEqual(result);
});
