const { program } = require("commander");

const contacts = require("./contacts");

const invokeAction = async ({ action, contactId, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "getById":
      const oneContact = await contacts.getContactById(contactId);
      return console.log(oneContact);
    case "removeContact":
      const removeContact = await contacts.removeContact(contactId);
      return console.log(removeContact);
    case "addContact":
      const addContact = await contacts.addContact({ name, email, phone });
      return console.log(addContact);

    default:
      break;
  }
};

program
  .option("-a, --action, <type>")
  .option("-i, --contactId, <type>")
  .option("-n, --name, <type>")
  .option("-e, --email, <type>")
  .option("-p, --phone, <type>");

program.parse();

const option = program.opts();

invokeAction(option);
