"use strict";

const faker = require("faker");
const { maxProfiles, actualMin, maxUsers } = require("../constants");

const profiles = [...Array(maxProfiles)].map((profile) => ({
  username: faker.name.firstName(),
  avatar: faker.image.avatar(),
  profilePicture: faker.image.imageUrl(),
  bio: faker.lorem.sentences(),
  userId: faker.random.number({ min: actualMin, max: maxUsers }),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Profiles", profiles, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Profiles", null, {});
  },
};
