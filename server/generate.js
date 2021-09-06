const faker = require('faker');

let database = { heroes: []};

for (let i = 1; i <= 50; i++){
  database.heroes.push({
    id: i,
    name: faker.name.findName(),
    short_name: faker.name.firstName(),
    alt_name: faker.name.lastName(),
    role: faker.name.title(),
    new_role: faker.name.title(),
    type: faker.random.word(),
    release_date: faker.date.past(),
    rework_date: faker.date.future(),
    attribute_id: faker.datatype.number,
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
