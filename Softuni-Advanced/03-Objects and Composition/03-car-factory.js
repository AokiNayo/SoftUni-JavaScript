function carFactory(car) {
  const storage = {
    engine: [
      { power: 90, volume: 1800 },
      { power: 120, volume: 2400 },
      { power: 200, volume: 3500 },
    ],
    carType: [
      { type: "hatchback", color: car.color },
      { type: "coupe", color: car.color },
    ],
  };

  let enginePower = car.power <= 90 ? 90
      : car.power <= 120 ? 120
      : 200

  let size = car.wheelsize % 2 != 0 ? car.wheelsize : car.wheelsize - 1;

  let finalCar = {};

  finalCar["model"] = car.model;
  finalCar["engine"] = storage.engine.find((x) => x.power == enginePower);
  finalCar["carriage"] = storage.carType.find((x) => x.type == car.carriage);
  finalCar["wheels"] = new Array(4).fill(size)

  return finalCar;
}
console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
console.log(
  carFactory({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);

console.log(
  carFactory({
    model: "Ferrari",
    power: 200,
    color: "red",
    carriage: "coupe",
    wheelsize: 21,
  })
);

console.log(
  carFactory({
    model: "Brichka",
    power: 65,
    color: "white",
    carriage: "hatchback",
    wheelsize: 16,
  })
);
