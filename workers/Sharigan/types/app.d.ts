
export interface Config {
  port: string;
  isDev: boolean;
  database: DatabaseInitOptions;
  web3: WebOptions;
  etherscanURL: string;
  coinGeckoURL: string;
  infuraURL: string;
}

export interface DatabaseInitOptions {
  host: string;
  user: string;
  password: string;
  name: string;
  port: string;
}

export interface WebOptions {
  chainId: string;
  network: string;
  providerKeys: ProviderKeys;
}

export interface ProviderKeys {
  infura: string;
  alchemy: string;
  etherscan: string;
}
