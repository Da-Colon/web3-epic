"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractModal = void 0;
const sequelize_1 = require("sequelize");
function ContractModal(sequelize) {
    const Contracts = sequelize.define("Contracts", {
        id: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
    }, {
        timestamps: false,
    });
    return Contracts;
}
exports.ContractModal = ContractModal;
//# sourceMappingURL=contracts.js.map