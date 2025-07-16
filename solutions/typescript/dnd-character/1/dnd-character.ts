export class DnDCharacter {
  public hitpoints: number;

  public charisma: number;
  public constitution: number;
  public dexterity: number;
  public intelligence: number;
  public strength: number;
  public wisdom: number;

  constructor() {
    this.charisma = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.strength = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }
  public static generateAbilityScore(): number {
    return new Array<number>(4)
      .fill(0)
      .map(() => {
        return Math.floor(Math.random() * 6) + 1;
      })
      .sort()
      .slice(1, 4)
      .reduce((acc, act) => acc + act, 0);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
