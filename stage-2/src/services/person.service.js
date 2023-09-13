const personModel = require("../models/person.model");
const {isNameExist, createNewPerson} = require('./person.utils');


async function addPerson(name) {
  // const isNameExist = (await personModel.findOne({ name })) !== null;
  
  if ((await isNameExist(name))) {
    throw new Error('Name already exist');
  }

  const lastDocument = await personModel
    .findOne({})
    .sort({ _id: -1 })
    .select("_id");
  let lastId = lastDocument ? lastDocument._id : null;
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
  const name = newData.name;
  if ((await isNameExist(name))) {
    throw new Error('Name already exist');
  }
  return await personModel.findByIdAndUpdate(userId, newData, { new: true }).select('-__v');
}

async function deletePerson(userId) {
  return await personModel.findByIdAndDelete(userId).select('-__v');
}

// OMIT __V from update and delete




module.exports = {
  addPerson,
  getPerson,
  updatePerson,
  deletePerson,
};
