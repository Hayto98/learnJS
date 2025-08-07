const playerA = {
  name: "A",
  hp: 20,
  attack: 20,
  defence: 10,
  hit(object) {
    const dame = Math.max(this.attack - object.defence, 0);
    object.hp -= dame;
    console.log(
      `${this.name} đánh ${object.name} với sát thương ${dame} và ${object.name} còn ${object.hp} máu`
    );
  },
  live() {
    return this.hp > 0;
  },
};

const playerB = {
  name: "B",
  hp: 50,
  attack: 20,
  defence: 10,
  hit(object) {
    const dame = Math.max(this.attack - object.defence, 0);
    object.hp -= dame;
    console.log(
      `${this.name} đánh ${object.name} với sát thương ${dame} và ${object.name} còn ${object.hp} máu`
    );
  },
  live() {
    return this.hp > 0;
  },
};
let round = 0;

while (playerA.live() && playerB.live()) {
  if (round % 2 === 0) {
    playerA.hit(playerB);
  } else {
    playerB.hit(playerA);
  }
  round++;
}

playerA.live() ? console.log("A thắng") : console.log("B thắng");
