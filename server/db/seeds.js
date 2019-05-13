use messagesDb;
db.dropDatabase();

db.messages.insertMany([
  {
    name: "Theo Wright",
    age: 8,
    country: "England",
    flag: "https://restcountries.eu/data/afg.svg",
    message: "whoooo my favourite astronauts!"
  },

  {
    name: "Stelios",
    age: 35,
    country: "Cyprus",
    flag: "https://restcountries.eu/data/afg.svg",
    message: "im miserable today"
  }
]);
