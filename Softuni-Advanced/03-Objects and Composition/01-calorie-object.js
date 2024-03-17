function calorieObject(arr) {
  let myObj = {}
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0){
      myObj[arr[i]] = Number(arr[i+1])
    }
  }
return myObj
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))