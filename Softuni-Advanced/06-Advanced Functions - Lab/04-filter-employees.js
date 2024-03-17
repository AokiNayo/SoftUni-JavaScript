let criteria = 'last_name-Johnson'
let data = `[{
  "id": "1",
  "first_name": "Kaylee",
  "last_name": "Johnson",
  "email": "k0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Johnson",
  "email": "kjost1@forbes.com",
  "gender": "Female"
}, {
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}, {
  "id": "4",
  "first_name": "Evanne",
  "last_name": "Johnson",
  "email": "ev2@hostgator.com",
  "gender": "Male"
}]`





solve(data, criteria)

function solve(dataString, criteria) {
  let parsedData = JSON.parse(dataString)
  let filteredEmployees = filter(criteria)
  printEmployees()

  function printEmployees() {
    let orderNum = 0
    filteredEmployees.forEach(x => {
      console.log(`${orderNum++}. ${x.first_name} ${x.last_name} - ${x.email}`)
    })
  }

  function filter(criteria) {
    let [key, value] = criteria.split('-')
    let filteredEmployees = parsedData.filter(x => x[key] == value)
    return filteredEmployees
  }
}  
