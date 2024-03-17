class JobOffers {
  constructor(employer, possition) {
    this.employer = employer;
    this.position = possition;
    this.jobCandidates = [];
  }

  jobApplication(candidates) {
    let succesfullyAdded = [];
    for (const curr of candidates) {
      let [name, education, yearsExperience] = curr.split("-");

      let existingPerson = this.jobCandidates.find((x) => x.name == name);

      if (existingPerson) {
        if (existingPerson.yearsExperience < yearsExperience){
          existingPerson.yearsExperience = yearsExperience
        }
      } else {
        let currPerson = {
          name: name,
          education: education,
          yearsExperience: Number(yearsExperience)
        };
        this.jobCandidates.push(currPerson);
        succesfullyAdded.push(name);
      }
    }
    return `You successfully added candidates: ${succesfullyAdded.join(", ")}.`;
  }
  jobOffer(chosenPerson) {
    let [name, minimalExperience] = chosenPerson.split("-");
    let currPerson = this.jobCandidates.filter((x) => x.name == name);
    
    if (currPerson.length == 0) {
      throw new Error(`${name} is not in the candidates list!`);
    }
    if (currPerson[0].yearsExperience < Number(minimalExperience)) {
      throw new Error(
        `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`
      );
    }
    currPerson[0].yearsExperience = "hired";
    return `Welcome aboard, our newest employee is ${name}.`;
  }

  salaryBonus(name) {
    let currPerson = this.jobCandidates.filter((x) => x.name == name);
    if (currPerson.length == 0) {
      throw new Error(`${name} is not in the candidates list!`);
    }
    let salary = '';
    
    switch (currPerson[0].education) {
      case "Bachelor":
        salary = "$50,000";
        break;
      case "Master":
        salary = "$60,000";
        break;
      default:
        salary = "$40,000";
        break;
    }
    return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of ${salary} per year!`;
  }

  candidatesDatabase() {
    if (this.jobCandidates.length == 0) {
      throw new Error('Candidate Database is empty!')
    }
    let output = 'Candidates list:\n'

    this.jobCandidates.sort((a,b) => a.name.localeCompare(b.name))

    for (const currCandidate of this.jobCandidates) {
      output += `${currCandidate.name}-${currCandidate.yearsExperience}\n`
    }
    return output.trim()
  }
}
let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["ZXY-Bachelor-10","John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18", "Aamanda-Bachelor-10"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("Jordan Cole-4"));
 console.log(Jobs.salaryBonus("Jordan Cole"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.candidatesDatabase());
