class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }
    // Method
    attack() {
        let attackType = "";

        if (this.type == "Mago") {
            attackType = "magia";
        } else if (this.type == "Guerreiro") {
            attackType = "espada";
        } else if (this.type == "Monge") {
            attackType = "artes marciais";
        } else if (this.type == "Ninja") {
            attackType = "shuriken";
        }

        return `O ${this.name} atacou com ${attackType}!`;
    }
}


let hero1 = new Hero("Gandalf", 1000, "Mago");
let hero2 = new Hero("Aragorn", 87, "Guerreiro");
let hero3 = new Hero("Bruce Lee", 32, "Monge");

console.log(hero1.attack());
console.log(hero2.attack());
console.log(hero3.attack());