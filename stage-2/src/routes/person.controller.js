const {
  addPerson,
  getPerson,
  updatePerson,
  deletePerson,
} = require("../services/person.service");

async function httpAddPerson(req, res) {
  try {
    const { name } = req.body;
    if (typeof(name) !== String) {
        res.status(400).json('Name can only be of type String');
      }
    const newPerson = await addPerson(name);
    res.status(201).json(newPerson);
  } catch (err) {
    if (err.message === 'Name already exist') {
        res.status(400).json(err.message);
    }
    res.status(500).json('Encountered an error');
  }
}

async function httpGetPerson(req, res) {
  try {
    const { id } = req.params;
    const person = await getPerson(id);
    res.status(200).json(person);
  } catch (err) {
    res.status(500).json("Encountered an error");
  }
}

async function httpUpdatePerson(req, res) {
  try {
    const { id } = req.params;
    const updatedPerson = await updatePerson(id, req.body);
    res.status(200).json(updatedPerson);
  } catch (err) {
    res.status(500).json("Encountered an error");
  }
}

async function httpDeletePerson(req, res) {
  try {
    const { id } = req.params;
    const deletedPerson = await deletePerson(id);
    res.status(200).json(deletedPerson);
  } catch (err) {
    res.status(500).json("Encountered an error");
  }
}

module.exports = {
  httpAddPerson,
  httpGetPerson,
  httpUpdatePerson,
  httpDeletePerson
};
