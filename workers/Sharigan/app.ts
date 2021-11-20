import express from "express";
import DBConnection from "./database/connection";
import * as Application from "./config/app.init";
import Web3Provider from "./web3/Web3Provider"
// todo :initialize redis

(async () => {
  const app = express();
  const dbConnection = new DBConnection(app)
  const web3Provider = new Web3Provider(app);
  
  // initialize database
  await dbConnection.init();
  // initialize web3 provider
  web3Provider.init()

  // initialize cors
  Application.cors(app);
  // initialize services
  Application.logging(app);
  Application.encoding(app);
  // initialize blockchain indexer routes
  // initialize server
  Application.init(app);
})()
