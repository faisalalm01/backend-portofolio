'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class karya extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  karya.init({
    title: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    link: DataTypes.STRING,
    image:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'karya',
  });
  return karya;
};