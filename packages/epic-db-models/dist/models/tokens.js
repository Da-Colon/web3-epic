"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenModel = void 0;
const sequelize_1 = require("sequelize");
function TokenModel(sequelize) {
    const Tokens = sequelize.define("Tokens", {
        id: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        symbol: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        contractAddress: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        homepageURL: {
            type: sequelize_1.DataTypes.STRING,
        },
        twitterScreenName: {
            type: sequelize_1.DataTypes.STRING,
        },
        telegramChannelIdentifier: {
            type: sequelize_1.DataTypes.STRING,
        },
        subRedditURL: {
            type: sequelize_1.DataTypes.STRING,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
        },
        totalSupply: {
            type: sequelize_1.DataTypes.STRING,
        },
    }, {
        timestamps: false,
    });
    return Tokens;
}
exports.TokenModel = TokenModel;
//# sourceMappingURL=tokens.js.map