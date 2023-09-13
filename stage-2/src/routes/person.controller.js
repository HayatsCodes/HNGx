const {
  addPerson,
  getPerson,
  updatePerson,
  deletePerson,
} = require("../services/person.service");

async function httpAddPerson(req, res) {
  try {
    const { name } = req.body;
    if (typeof name !== 'string') {
        return res.status(400).json('Name can only be of type String');
      }
    const newPerson = await addPerson(name);
    return res.status(201).json(newPerson);
  } catch (err) {
    if (err.message === 'Name already exist') {
        return res.status(400).json(err.message);
    }
    console.log(err)
    return res.status(500).json('Encountered an error');
  }
}

async function httpGetPerson(req, res) {
  try {
    const { id } = req.params;
    const person = await getPerson(id);
    if (!person) {
        return res.status(404).json('Person not found');
    }
    return res.status(200).json(person);
  } catch (err) {
    return res.status(500).json("Encountered an error");
  }
}

async function httpUpdatePerson(req, res) {
  try {
    const { id } = req.params;
    const updatedPerson = await updatePerson(id, req.body);
    if (!updatedPerson) {
        return res.status(404).json('Person not found');
    }
    return res.status(200).json(updatedPerson);
  } catch (err) {
    if (err.message === 'Name already exist') {
        return res.status(400).json(err.message);
    }
    return res.status(500).json("Encountered an error");
  }
}

async function httpDeletePerson(req, res) {
  try {
    const { id } = req.params;
    const deletedPerson = await deletePerson(id);
    if (!deletedPerson) {
        return res.status(404).json('Person not found');
    }
    return res.status(200).json(deletedPerson);
  } catch (err) {
    return res.status(500).json("Encountered an error");
  }
}

module.exports = {
  httpAddPerson,
  httpGetPerson,
  httpUpdatePerson,
  httpDeletePerson
};
