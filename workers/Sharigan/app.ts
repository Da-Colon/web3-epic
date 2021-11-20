import express from "express";
import DBConnection from "./database/connection";
import * as Application from "./config/app.init";
import * as Web3 from "./web3/web3.utils"

(async () => {
  const app = express();
  // initialize database
  const dbConnection = new DBConnection(app)
  await dbConnection.init();

  // initialize web3 provider
  Web3.init(app);

  // todo :initialize redis
  // initialize cors
  Application.cors(app);
  // initialize services
  Application.logging(app);
  Application.encoding(app);
  // initialize blockchain indexer routes
  // initialize server
  Application.init(app);
  Web3.fetchBlockChainData(app)
})()
