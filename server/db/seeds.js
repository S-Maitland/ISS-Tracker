use messagesDb;
db.dropDatabase();

db.messages.insertMany([
  {
    name: "Theo Wright",
    age: 8,
    country: "England",
    flag: "https://restcountries.eu/data/afg.svg",
    message: "whoooo my favourite astronauts!",
    time: "Tue May 14 2019 15:41:29 GMT+0100 (British Summer Time)"
  },

  {
    name: "Stelios",
    age: 35,
    country: "Cyprus",
    flag: "https://restcountries.eu/data/afg.svg",
    message: "im miserable today",
    time: "Tue May 14 2019 15:41:29 GMT+0100 (British Summer Time)"
  }
]);
