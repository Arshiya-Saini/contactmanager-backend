const contacts = [];

export default function (app) {

  app.get("/api/contacts", (req, res) => {
    res.json(contacts);
  });

  app.post("/api/contacts", (req, res) => {
    const newContact = {
      ...req.body,
      _id: Date.now().toString()
    };

    contacts.push(newContact);
    res.json(newContact);
  });

}
