"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modalsInit = void 0;
const contracts_1 = require("./models/contracts");
const migrations_1 = require("./models/migrations");
const tokens_1 = require("./models/tokens");
function modalsInit(sequelize) {
    // token modal
    const Tokens = (0, tokens_1.TokenModel)(sequelize);
    const Contracts = (0, contracts_1.ContractModal)(sequelize);
    Tokens.sync({ alter: true });
    Contracts.sync({ alter: true });
    // migration modal
    const Migrations = (0, migrations_1.MigrationsModel)(sequelize);
    Migrations.sync({ alter: true });
    // todo contract modal
    // todo user address modal
}
exports.modalsInit = modalsInit;
//# sourceMappingURL=app.js.map