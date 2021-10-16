const Config = {
  api: "http://localhost:8080",
  walletEndpoint: (address: string) => `interactions/wallet/${address}`,
  contractEndpoint: (address: string) => `interactions/contract/${address}`,
};

export default Config;
