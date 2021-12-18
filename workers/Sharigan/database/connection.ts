import express from "express";
import config from "../config";
import { DatabaseInitOptions } from "types/app";
import Mongoose from "mongoose";
import chalk from "chalk";

export default class DBConnection {
  app: express.Application;

  constructor(app: express.Application) {
    this.app = app;
  }
  private databaseConfig: DatabaseInitOptions = config.database;
  exit = (message: string) => {
    console.info(chalk.red(message));
    process.exit(1);
  };

  private modalsInit = async (db: Mongoose.Connection) => {
    // todo create models
    // initialize modals

    // initialize migrations
  }

  async init() {
    try {
      const { user, password, host, port, name } = this.databaseConfig;
      var dbUrl = "mongodb://".concat(host, ":").concat(port, "/").concat(name);
      var options = {
        user: user,
        pass: password,
        useNewUrlParser: true,
      };
      const db = Mongoose.createConnection(dbUrl, options);

      db.on("connected", () => {
        console.info(chalk.greenBright(`[mongodb] connection successful`));
        console.info(chalk.greenBright(`[${name}] connected`));
      });

      db.on("disconnected", () => console.info(chalk.greenBright(`Disconnected from ${db.name} database`)));
      db.on("error", (error) => this.exit(`Error with connection to ${db.name} database: ${error}`));
      await this.modalsInit(db);
      this.app.locals.db = db;
    } catch (err) {
      console.info(chalk.red(`database connection unsuccessful`));
      console.error(err);
    }
  }
}
