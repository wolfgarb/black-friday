// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

  // - `id`
  //   - Integer
  //   - Don't allow null values
  //   - Set as primary key
  //   - Use auto increment
  // - `product_name`
  //   - String
  //   - Don't allow null values
  // - `price`
  //   - Decimal
  //   - Don't allow null values
  //   - Validate that the value is a decimal
  // - `stock`
  //   - Integer
  //   - Don't allow null values
  //   - Set a default value of 10
  //   - Validate that the value is numeric
  // - `category_id`
  //   - Integer
  //   - Reference the `category` model's `id`

// set up fields and rules for Product model
Product.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
