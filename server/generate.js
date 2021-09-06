const faker = require('faker');

let database = { heroes: []};

let date = new Date();
const formatDate = (date)=>{
  return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
}

for (let i = 1; i <= 50; i++){
  database.heroes.push({
    id: i,
    name: faker.name.findName(),
    short_name: faker.name.firstName(),
    alt_name: faker.name.lastName(),
    role: faker.name.title(),
    new_role: faker.name.title(),
    type: faker.random.word(),
    release_date: faker.date.past(10, formatDate(date)),
    rework_date: faker.date.future(10, formatDate(date)),
    attribute_id: faker.datatype.number(),
    translations: [
      translation1 = faker.lorem.word(),
      translation1 = faker.lorem.word(),
      translation1 = faker.lorem.word(),
      translation1 = faker.lorem.word(),
      translation1 = faker.lorem.word()
    ]
  });
}

console.log(JSON.stringify(database));
