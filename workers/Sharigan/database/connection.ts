import { Sequelize } from "sequelize";
import express from "express";
import config from "../config";
import chalk from "chalk";
import { modalsInit } from "@epic/epic-db-models";
import { DatabaseInitOptions } from "types/app";

export default class DBConnection {
  app: express.Application;

  constructor(app: express.Application) {
    this.app = app;
  }
  private databaseConfig: DatabaseInitOptions = config.database;

  async init() {
    try {
      const { user, password, host, port, name, dialect } = this.databaseConfig;
      const sequelize = new Sequelize(name, user, password, {
        host,
        port: Number(port),
        dialect,
        logging: false,
      });
      sequelize
      .authenticate()
      .then(() => {
        console.info(chalk.greenBright(`[${dialect}] connection successful`));
        console.info(chalk.greenBright(`[${name}] connected`));
        // :define modals
        modalsInit(sequelize);
        this.app.locals.sequelize = sequelize;
      })
      .catch(console.error);
    } catch (err) {
      console.info(chalk.red(`database connection unsuccessful`));
      console.error(err)
    }
  }
}
