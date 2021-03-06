import { Sequelize } from "sequelize";
import express from 'express';
import config from ".";
import chalk from "chalk";
import { modalsInit } from "@epic/epic-db-models";

export function init(app: express.Application) {
  try {
    const { database } = config;
    const {user, password, host, port, name, dialect} = database
    const sequelize = new Sequelize(name, user, password, {
      host,
      port: Number(port),
      dialect,
      logging: false
    } )
    sequelize.authenticate().then(() => {
      console.info(chalk.greenBright(`[${dialect}] connection successful`))
      console.info(chalk.greenBright(`[${name}] connected`))
      // :define modals
      modalsInit(sequelize)
      app.locals.sequelize = sequelize;
    }).catch(console.error)
  } catch {
    console.info(chalk.greenBright(`connection unsuccessful`))
  }
}
  // todo :initialize migrations