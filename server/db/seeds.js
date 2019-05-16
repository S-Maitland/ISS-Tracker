use messagesDb;
db.dropDatabase();

db.messages.insertMany([
  {
    name: "Theo Wright",
    age: 8,
    country: "England",
    flag: "https://restcountries.eu/data/gbr.svg",
    message: "whoooo my favourite astronauts!",
    time: "Thu May 13 2019 15:41:29 GMT+0100 (British Summer Time)"
  },

  {
    name: "Stelios",
    age: 35,
    country: "Cyprus",
    flag: "https://restcountries.eu/data/cyp.svg",
    message: "im miserable today",
    time: "Fri May 14 2019 12:41:29 GMT+0100 (British Summer Time)"
  }
]);
