"use strict";
const faker = require("faker");
const { actualMin, maxNotes, maxUsers } = require("../constants");

const notes = [...Array(maxNotes)].map((note) => ({
  title: faker.lorem.word(),
  content: faker.lorem.sentence(),
  imageUrl: faker.image.imageUrl(),
  userId: faker.random.number({ min: actualMin, max: maxUsers }),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Notes", notes, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notes", null, {});
  },
};
