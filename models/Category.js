const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

  // - `id`
  //   - Integer
  //   - Don't allow null values
  //   - Set as primary key
  //   - Use auto increment
  // - `category_name`
  //   - String
  //   - Don't allow null values

Category.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
