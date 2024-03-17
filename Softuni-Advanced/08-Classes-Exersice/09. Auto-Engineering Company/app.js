function carFactory(data) {
  let carCompanies = {};
  for (const entry of data) {
    let [companyName, carModel, producedCarsStr] = entry.split(" | ");
    let producedCars = Number(producedCarsStr);
    let currentCar = { carModel: carModel, producedCars: producedCars };

    if (!carCompanies[companyName]) {
      carCompanies[companyName] = [];
    }

    let existingCarModel = carCompanies[companyName].find((x) => x.carModel == carModel);

    if (existingCarModel) {
      existingCarModel.producedCars += producedCars;
    } else {
      carCompanies[companyName].push(currentCar);
    }
  }

  for (const company in carCompanies) {
    let currCompany = carCompanies[company];
    console.log(company);
    for (const currCar of currCompany) {
      console.log(`###${currCar.carModel} -> ${currCar.producedCars}`);
    }
  }
}

carFactory([
  "Mercedes-Benz | 50PS | 123",
  "Mini | Clubman | 20000",
  "Mini | Convertible | 1000",
  "Mercedes-Benz | 60PS | 3000",
  "Hyunday | Elantra GT | 20000",
  "Mini | Countryman | 100",
  "Mercedes-Benz | W210 | 100",
  "Mini | Clubman | 1000",
  "Mercedes-Benz | W163 | 200",
]);