export default function definitionHealth(masHero) {
  masHero.sort((a, b) => b.health - a.health);
  return masHero;
}
