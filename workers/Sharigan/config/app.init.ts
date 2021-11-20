import express from "express";
import morgan from "morgan";
import http from "http";
import config from ".";
import chalk from "chalk";
import corsOptions from "cors";

export default class ExpressApplication {
  app: express.Application;
  constructor(app: express.Application) {
    this.app = app;
  }

  cors() {
    this.app.use(corsOptions());
  }
  logging() {
    this.app.use(morgan("dev"));
  }
  encoding() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private onError(error: any) {
    if (error.syscall !== "listen") {
      throw error;
    }
    const bind = typeof config.port === "string" ? "Pipe " + config.port : "Port " + config.port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
      case "EADDRINUSE":
        console.error(bind + " is already in use");
        process.exit(1);
      default:
        throw error;
    }
  }
  private normalizePort(val: string) {
    const port = parseInt(val, 10);
    if (isNaN(port)) return val;
    if (port >= 0) return port;
    return false;
  }

  async init() {
    const server = http.createServer(this.app);
    const port = this.normalizePort(config.port);
    this.app.set("port", port);
    server.listen(port);
    server.on("error", this.onError);
    server.on("listening", () => {
      console.info(chalk.bold.white(`[web3-indexer] is listening on ${config.port}.`));
    });
  }
}
