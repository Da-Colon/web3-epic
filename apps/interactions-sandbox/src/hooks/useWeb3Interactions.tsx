import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import Config from "../config";
import { ContractInteractionsResponse, WalletInteractionsResponse } from "../types/web3Interactions";

type FetchWalletInteractions = (address: string) => void;
type FetchContractInteractions = (address: string, numberOfAccounts?: string) => void;

interface Web3InteractionsHook {
  error: string;
  fetchWalletInteractions: FetchWalletInteractions;
  fetchContractInteractions: FetchContractInteractions;
  walletResults: WalletInteractionsResponse;
  contractResults: ContractInteractionsResponse;
  isTokenLoading: boolean;
  isContractLoading: boolean;
}

const useWeb3Interactions = (): Web3InteractionsHook => {
  const [walletResults, setWalletResults] = useState<WalletInteractionsResponse>(
    {} as WalletInteractionsResponse
  );
  const [contractResults, setContractResults] = useState<ContractInteractionsResponse>(
    {} as ContractInteractionsResponse
  );
  const [error, setError] = useState("");
  const [ isTokenLoading, setTokenLoading] = useState(false)
  const [ isContractLoading, setContractLoading] = useState(false)

  const fetchWalletInteractions: FetchWalletInteractions = async (address) => {
    try {
      setTokenLoading(true)
      setError("");
      const response: AxiosResponse<WalletInteractionsResponse | any> = await axios.get(
        `${Config.api}/${Config.walletEndpoint(address)}`
      );
      if (response.data.success) {
        setWalletResults(response.data);
        setTokenLoading(false)
        return;
      }
      setError(response.data.error);
      setTokenLoading(false)
    } catch (error) {
      console.log("🚀 ~ fetchContract ~ error", error);
      setError(error as string);
    }
    setTokenLoading(false)
  };

  const fetchContractInteractions: FetchContractInteractions = async (address, numOfAccounts) => {
    try {
      setContractLoading(true)
      setError("");
      const urlstring = `${Config.api}/${Config.contractEndpoint(address)}`;
      const url = !numOfAccounts ? urlstring : `${urlstring}?numberOfAccounts=${numOfAccounts}`;
      const response: AxiosResponse<WalletInteractionsResponse | any> = await axios.get(url);
      if (response.data.success) {
        setContractResults(response.data);
        setContractLoading(false)
        return;
      }
      setError(response.data.error);
      setContractLoading(false)
    } catch (error) {
      console.log("🚀 ~ fetchContract ~ error", error);
      setError("Server Error");
      setContractLoading(false)
    }
  };

  return { walletResults, contractResults, error, isTokenLoading, isContractLoading, fetchWalletInteractions, fetchContractInteractions };
};

export default useWeb3Interactions;
