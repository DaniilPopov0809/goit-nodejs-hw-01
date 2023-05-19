const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const getContacts = await listContacts();
    const result = getContacts.find((contact) => contact.id === contactId);
    return result || null;
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const getContacts = await listContacts();
    const index = getContacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      return null;
    }
    const [result] = getContacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(getContacts, null, 2));
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function addContact(data) {
  try {
    const getContacts = await listContacts();
    const newContact = { id: nanoid(), ...data };
    getContacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(getContacts, null, 2));
    return newContact;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
