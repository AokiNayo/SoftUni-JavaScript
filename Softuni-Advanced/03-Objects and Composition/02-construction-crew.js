function constructionCrew(worker) {
  if(worker.dizziness) {
    let result = worker.weight * 0.1 * worker.experience
    worker.levelOfHydrated += result
    worker.dizziness = false
  }
  return worker
}

console.log(constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
}))
console.log(constructionCrew({ weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true }
))