import express from "express";

import DBConnection from "./database/connection";
import ExpressApplication from "./application";
import Web3Provider from "./web3/Web3Provider"
// todo :initialize redis

(async () => {
  const app = express();
  const dbConnection = new DBConnection(app)
  const web3Provider = new Web3Provider(app);
  const expressApplication = new ExpressApplication(app);
  // initialize database
  await dbConnection.init();

  // initialize web3 provider
  web3Provider.init()

  // Express Aplication 
  // initialize cors
  expressApplication.cors();
  // initialize services
  expressApplication.logging();
  expressApplication.encoding();
  // initialize server
  
  expressApplication.init();
})()
