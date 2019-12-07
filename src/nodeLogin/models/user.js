const Sequelize = require("sequelize");
const db = require("./database.js");
const User = db.sequelize.define(
  "users",
  {
    _id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    first_name: {
      type: Sequelize.STRING,
      required: true
    },
    last_name: {
      type: Sequelize.STRING,
      required: true
    },
    email: {
      type: Sequelize.STRING,
      required: true
    },
    phoneNum: {
      type: Sequelize.INTEGER,
      required: true
    },
    password: {
      type: Sequelize.STRING,
      required: true
    },
    father_name: {
      type: Sequelize.STRING
    },
    dob: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    highschool_board: {
      type: Sequelize.STRING
    },
    percentage10: {
      type: Sequelize.INTEGER
    },
    year_passing10: {
      type: Sequelize.INTEGER
    },
    intermediate_board: {
      type: Sequelize.STRING
    },
    percentage12: {
      type: Sequelize.INTEGER
    },
    year_passing12: {
      type: Sequelize.INTEGER
    },
    graduate_from: {
      type: Sequelize.STRING
    },
    graduate_year: {
      type: Sequelize.INTEGER
    },
    current_work: {
      type: Sequelize.STRING
    },
    designation: {
      type: Sequelize.STRING
    },
    experience: {
      type: Sequelize.INTEGER
    },
    pan_number: {
      type: Sequelize.STRING
    },
    about: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    P_address: {
      type: Sequelize.STRING
    },
    landmark: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    my_state: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    pincode: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  }
);
module.exports = User;
