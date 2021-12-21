import { DataTypes, Model } from "sequelize";
import Patent from "./Patent.js";
import sequelize from "../config/sequelize_mysql.js";
import Stormtrooper_Division from "./Stormtrooper_Division.js";
import Division from "./Division.js";

class Stormtrooper extends Model { }

Stormtrooper.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_patent: {
        type: DataTypes.INTEGER,
        references: {
            model: Patent,
            key: "id",
        }
    }
}, {
    sequelize,
    modelName: "Stormtrooper",
    timestamps: false,
});

Stormtrooper.belongsToMany(Division, { 
    through: Stormtrooper_Division,
    foreignKey: "id_stormtrooper",
    otherKey: "id_division",
});

export default Stormtrooper;