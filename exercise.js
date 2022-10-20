const character = {
    name: this.name,
    attack(target) {
      console.log(`${this.name} attacked ${target.name}`)
    },
    heal(char) {
      console.log(`${this.name} healed ${char.name}`)
    },
  }
  
  const player1 = Object.create(character)
  
  const player2 = Object.create(character)
  
  player1.name = 'Villian'
  player2.name = 'Priest'
  player1.attack(player2)
  player2.heal(player1)
  