"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationsModel = void 0;
const sequelize_1 = require("sequelize");
function MigrationsModel(sequelize) {
    const Migrations = sequelize.define('Migrations', {
        id: {
            type: sequelize_1.DataTypes.STRING,
            primaryKey: true,
        }
    });
    return Migrations;
}
exports.MigrationsModel = MigrationsModel;
//# sourceMappingURL=migrations.js.map