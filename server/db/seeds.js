use messagesDb;
db.dropDatabase();

db.messages.insertMany([
  {
    name: "Theo Wright",
    age: 8,
    country: "England",
    flag: "",
    message: "whoooo my favourite astronauts!"
  },

  {
    name: "Stelios",
    age: 35,
    country: "Cyprus",
    flag: "",
    message: "im miserable today"
  }
]);
