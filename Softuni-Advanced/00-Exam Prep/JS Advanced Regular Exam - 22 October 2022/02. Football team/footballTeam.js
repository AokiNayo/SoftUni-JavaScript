class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName
    this.country = country
    this.invitedPlayers = []
  }

  newAdditions(footballPlayers) {
    let joinedPlayers = []

    for (const currValues of footballPlayers) {
      let [name, age, playerValue] = currValues.split('/')
      playerValue = Number(playerValue)
      age = Number(age)

      let existingPlayer = this.invitedPlayers.find(x => x.name == name)

      if (existingPlayer) {
        if (existingPlayer.playerValue < playerValue) {
          existingPlayer.playerValue = playerValue
        }
      } else {
        this.invitedPlayers.push({ name, age, playerValue })
      }
    }
    this.invitedPlayers.map(x => joinedPlayers.push(x.name))
    return `You successfully invite ${joinedPlayers.join(', ')}.`
  }

  signContract(selectedPlayer) {
    const [name, playerOffer] = selectedPlayer.split('/')
    const existingPlayer = this.invitedPlayers.find(x => x.name == name)

    if (!existingPlayer) {
      throw new Error(`${name} is not invited to the selection list!`)
    }
    if (existingPlayer.playerValue > playerOffer) {
      throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${existingPlayer.playerValue - playerOffer} million more are needed to sign the contract!"`)
    }

    existingPlayer.playerValue = 'Bought'
    
    return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
  }

  ageLimit(name, age) {
    const existingPlayer = this.invitedPlayers.find(x => x.name == name)

    if (!existingPlayer) {
      throw new Error(`${name} is not invited to the selection list!`)
    }
    const ageDifference = age - existingPlayer.age

    if (existingPlayer.age < age) {
      if (ageDifference < 5) {
        return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
      } else {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
      }
    } else {
      return `${name} is above age limit!`
    }
  }

  transferWindowResult() {
    let  resultString = [`Players list:`]

    this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name))
    this.invitedPlayers.forEach(x => resultString.push(`Player ${x.name}-${x.playerValue}`))

    return resultString.join('\n').trim()
  }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["ZPau Torres/25/52", "Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52", "Aau Torres/25/52", "Lionel Messi/35/550"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.ageLimit("Lionel Messi", 34));
console.log(fTeam.transferWindowResult());
