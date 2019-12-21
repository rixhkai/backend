"use strict";

module.exports = {
 up: (queryInterface, Sequelize) => {
  /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  return queryInterface.bulkInsert(
   "categories",
   [
    {
     name: "Programming"
    },
    {
     name: "Movie"
    },
    {
     name: "Music"
    },
    {
     name: "Games"
    },
    {
      name: "Anime"
    },
    {
      name: "Tech"
    },
    {
      name: "news"
    }
   ],
   {}
  );
 },

 down: (queryInterface, Sequelize) => {
  /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  return queryInterface.bulkDelete("categories", null, {});
 }
};
