const personModel = require("../models/person.model");

async function addPerson(name) {
  const isNameExist = (await personModel.findOne({ name })) !== null;
  if (isNameExist) {
    throw new Error('Name already exist');
  }

  const lastDocument = await personModel
    .findOne({})
    .sort({ _id: -1 })
    .select("_id");
  const lastId = lastDocument ? lastDocument._id : null;
  if (lastId) {
    lastId++;
    await createNewPerson(lastId, name);
  } else {
    lastId = 1;
    await createNewPerson(lastId, name);
  }
  return await personModel.findOne({ name }, { __v: 0 });
}

async function getPerson(userId) {
  return await personModel.findOne({ _id: userId }, { __v: 0 });
}

async function updatePerson(userId, newData) {
  return await personModel.findByIdAndUpdate(userId, newData, { new: true });
}

async function deletePerson(userId) {
  return await personModel.findByIdAndDelete(userId);
}

async function createNewPerson(id, name) {
  const person = new personModel({
    _id: id,
    name,
  });
  await person.save();
}

module.exports = {
  addPerson,
  getPerson,
  updatePerson,
  deletePerson,
};
