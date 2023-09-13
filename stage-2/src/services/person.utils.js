const personModel = require("../models/person.model");
async function isNameExist(name) {
  return (await personModel.findOne({ name })) !== null;
}

async function createNewPerson(id, name) {
  const person = new personModel({
    _id: id,
    name,
  });
  await person.save();
}

module.exports = {
  isNameExist,
  createNewPerson,
};
