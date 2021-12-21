import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize_mysql.js";

class Patent extends Model { }

Patent.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "Patent",
    timestamps: false,
});

export default Patent;