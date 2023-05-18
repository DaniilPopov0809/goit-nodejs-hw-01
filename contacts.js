const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const getContacts = await listContacts();
  const result = getContacts.find((contact) => contact.id === contactId);
  return result || null;
}

async function removeContact(contactId) {
  const getContacts = await listContacts();
  const index = getContacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = getContacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(getContacts, null, 2));
  return result;
}

async function addContact(data) {
  const getContacts = await listContacts();
  const newContact = {id: nanoid(), ...data}
  getContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(getContacts, null, 2));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
