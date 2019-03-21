'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Burgers', [{
            burger_name: "Cheese",
            complete: true,
            createdAt: new Date(),
            updatedAt: new Date(), // Timestamps
        }, {
            burger_name: "Regular",
            complete: true,
            createdAt: new Date(),
            updatedAt: new Date(), // Timestamps
        }, {
            burger_name: "Double",
            complete: false,
            createdAt: new Date(),
            updatedAt: new Date(), // Timestamps
        }, {
            burger_name: "Egg and cheese",
            complete: false,
            createdAt: new Date(),
            updatedAt: new Date(), // Timestamps
        }, {
            burger_name: "bacon",
            complete: true,
            createdAt: new Date(),
            updatedAt: new Date(), // Timestamps
        }], {

        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Burgers', null, {});
    }
};