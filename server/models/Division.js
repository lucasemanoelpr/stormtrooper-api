import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize_mysql.js";

class Division extends Model { }

Division.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "Division",
    timestamps: false,
});

export default Division;