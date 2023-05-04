import { Sequelize } from "sequelize";
import database from './database.js';

const Product = database.define('product',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primeryKey:true
    },
    productName:Sequelize.STRING,
    cproductPrice:Sequelize.FLOAT,
    productImage:Sequelize.STRING,
    productDescription:Sequelize.TEXT,
    isAvailable:Sequelize.BOOLEAN,
    unitInStock:Sequelize.INTEGER

});

export default Category;