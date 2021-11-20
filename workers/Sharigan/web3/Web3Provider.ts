import chalk from "chalk";
import { ethers } from "ethers";
import express from "express";
import config from "../config"; 

export default class Web3Provider {
  app: express.Application;
  constructor(app: express.Application) {
    this.app = app;
  }
  private web3Config = config.web3;
  private blockTime = 5000;
  public provider: ethers.providers.BaseProvider | null = null;
  public lastKnownBlock: number = 0;

  init() {
    try {
      const network = ethers.providers.getNetwork(parseInt(this.web3Config.chainId));
      const defaultProvider = ethers.getDefaultProvider(network, { ...config.web3.providerKeys, quorum: 1 });

      this.provider = defaultProvider;
      console.info(chalk.blue(`[Web3 Node] connection successful. ${network.chainId}:${network.name}`))

      this.blockCounter()
    } catch (err) {
      console.error('There was an error connecting to web3 node', err)
    }
  }

  /**
   * sets current block
   * 
   * @param blockNumber
   * @param hasBlockChanged
   */
  private setBlock(blockNumber: number, hasBlockChanged: boolean) {
    if(hasBlockChanged) console.info(chalk.magenta(`current block: ${blockNumber}`));
    this.lastKnownBlock = blockNumber;
  }

  /**
   * continuely checks for new blocks
   * 
   */
  private async blockCounter() {
    const currentBlock = await this.provider.getBlockNumber();
    const hasBlockChanged = this.lastKnownBlock !== currentBlock
    this.setBlock(hasBlockChanged ? currentBlock : this.lastKnownBlock, hasBlockChanged)
    setTimeout(async () => await this.blockCounter(), this.blockTime);
  }
}
