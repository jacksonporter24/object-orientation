class Wizard {
    constructor(name, age, favoriteSpell) {
      this.name = name;
      this.age = age;
      this.favoriteSpell = favoriteSpell;
    }
    castSpell() {
      console.log(`${this.name} has cast ${this.favoriteSpell}.`)
    }
  }
  
  let willy = new Wizard("Wowol", "8989", "Holimoosh")
  willy.castSpell()