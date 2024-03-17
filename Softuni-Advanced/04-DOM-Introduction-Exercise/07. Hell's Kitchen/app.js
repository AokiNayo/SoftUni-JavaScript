function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  // ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
  function onClick() {
    const inputValue = document.querySelector("textarea").value;
    const inputAsArray = JSON.parse(inputValue);

    let restaurants = {};

    for (const current of inputAsArray) {
      let [resName, workersStr] = current.split(" - ");
      let workers = workersStr.split(", ");

      if (!restaurants.hasOwnProperty(resName)) {
        restaurants[resName] = {
          averageSalary: 0,
          bestSalary: 0,
          workers: [],
        };
      }
      let currentRestaurantRef = restaurants[resName];

      for (const currentWorker of workers) {
        let [name, salary] = currentWorker.split(" ");
        currentRestaurantRef.workers.push({ name, salary: Number(salary) });
      }

      let workersSalary = currentRestaurantRef.workers.reduce(
        (sum, worker) => sum + Number(worker.salary),
        0
      );

      currentRestaurantRef.workers.sort((a, b) => b.salary - a.salary);
      currentRestaurantRef.bestSalary = Number(currentRestaurantRef.workers[0].salary).toFixed(2);
      currentRestaurantRef.averageSalary = (workersSalary / currentRestaurantRef.workers.length).toFixed(2)

    }

    let sortedData = Object.entries(restaurants).sort(([, a], [, b]) => b.averageSalary - a.averageSalary)
    let bestRestaurant = sortedData[0]

    debugger
    let bestRestaurantOutput = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].averageSalary} Best Salary: ${bestRestaurant[1].bestSalary}`
    let bestWorkers = []
    for (const worker of bestRestaurant[1].workers) {
      bestWorkers.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
    }
    
    document.querySelector('#bestRestaurant p').textContent = bestRestaurantOutput
    document.querySelector('#workers p').textContent = bestWorkers.join(' ')
  }
}