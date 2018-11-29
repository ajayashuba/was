// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
  
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.fn('uuid_generate_v4')
  },
    googleId: { type: Sequelize.STRING },
  
    facebookId: { type: Sequelize.STRING },
  facebook :{type:Sequelize.JSON },
  google:{type:Sequelize.JSON }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    },
    timestamps: false 
  });

  // eslint-disable-next-line no-unused-vars
  users.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return users;
};
