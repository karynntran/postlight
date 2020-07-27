const fs = require('fs');
const faker = require('faker')

function getEmployees () {
  let data = { employees: []}
  for (let id = 0; id < 25; id++) {
    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    let job = faker.name.jobType()
    let avatar = faker.image.avatar()
    data.employees.push({
      "id": id,
      "name": `${firstName} ${lastName}`,
      "email": `${firstName.toLowerCase()}${lastName.toLowerCase()}@email.com`,
      "position": job,
      "avatar": avatar
    })
  }
  let employees = JSON.stringify(data, null, 2);
  fs.writeFileSync('db.json', employees);
}

getEmployees();


