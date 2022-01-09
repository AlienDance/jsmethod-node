const faker = require('faker');

const generateFakerForm = () => {
  const fakerForm = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.datatype.number({min: 1000000, max: 9999999}),
    address: faker.address.streetAddress()
  };
  return fakerForm
}

module.exports = generateFakerForm;
