import chalk from "chalk";
import { Config } from "../types/app";
require("dotenv").config();

const config: Config = {
  port: process.env.PORT || "12110",
  isDev: process.env.NODE_ENV === 'development',
  etherscanURL: "https://api.etherscan.io/api",
  coinGeckoURL: "https://api.coingecko.com/api/v3",
  infuraURL: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
  database: {
    host: process.env.MONGO_HOST || "localhost",
    user: process.env.MONGO_USER || "",
    password: process.env.MONGO_PASSWORD || "",
    name: process.env.MONGO_DB || "",
    port: process.env.MONGO_PORT || "27017",
  },
  web3: {
    chainId: "1",
    network: "mainnet",
    providerKeys: {
      infura: process.env.INFURA_API_KEY,
      alchemy: process.env.ALCHEMY_API_KEY,
      etherscan: process.env.ETHERSCAN_API_KEY,
    },
  },
};

console.info(chalk.bold.blue(`[${process.env.NODE_ENV}] environment`));

export default config;
