const { DataTypes } = require('sequelize');
//const Sequelize = require('sequelize');

// sequelize connection credentials & its instance
const sequelize = require('../config/db.config');
  
  const Player = sequelize.define('Player', {
    playerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    prev_team: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    batting_style: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_no:  {
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
    bowling_style: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    isWicketKeeper: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prev_auction_sold_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
Player.sync();
module.exports = Player;

  