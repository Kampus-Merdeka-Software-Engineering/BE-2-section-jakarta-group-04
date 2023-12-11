const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize("mysql://root@localhost:3306/db_travelinAja")

const Flights = sequelize.define('Flights', {
    flight_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    maskapai: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    departure_city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arrival_city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    departure_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    arrival_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    kelas: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });
  
  module.exports = Flights;