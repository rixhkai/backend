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
  // return queryInterface.bulkInsert(
  //  "articles",
  //  [
  //   {
  //    title: "React js",
  //    content:
  //     "What is Reactjs? Reactjs is a Component-based JavaScript library built by Facebook.Open-sourced by Facebook in 2013, it has been met with excitement from a wide community of developers. Corporate adopters have included the likes of Netflix, Yahoo!, Github, and Codecademy.",
  //    category_id: {
  //     id: 0
  //    },
  //    category_name: "programming",
  //    image: "https://miro.medium.com/max/2160/1*vXOiuzLafhCgu7_HOKM1Xg.png",
  //    is_published: true,
  //    is_archived: false,
  //    slug: "react",
  //    author_id: 0
  //   }
  //  ],
  //  {}
  // );
 },

 down: (queryInterface, Sequelize) => {
  /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
 }
};
