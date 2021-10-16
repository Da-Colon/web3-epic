import useWeb3Interactions from "../../hooks/useWeb3Interactions";
import ContractForm from "../ContractForm";
import ContractResults from "../ContractResults";
import WalletResults from "../WalletResults";
import WalletForm from "../WalletForm";
import "./styles.css";

const Web3Interactions = () => {
  const Web3Interactions = useWeb3Interactions();
  return (
    <div className="web3-interactions-wrapper">
      <section>
        <WalletForm
          handleSubmit={Web3Interactions.fetchWalletInteractions}
          address="0x930aF7923B8B5F8d3461ad1999CEEB8a62884b19"
        />
        <ContractForm
          handleSubmit={Web3Interactions.fetchContractInteractions}
          numOfAccounts="10"
          address="0x7697b462a7c4ff5f8b55bdbc2f4076c2af9cf51a"
        />
      </section>
      <section>
        <WalletResults
          error={Web3Interactions.error}
          isTokenLoading={Web3Interactions.isTokenLoading}
          walletResults={Web3Interactions.walletResults}
        />
        <ContractResults
          contractResults={Web3Interactions.contractResults}
          isContractLoading={Web3Interactions.isContractLoading}
          error={Web3Interactions.error}
        />
      </section>
    </div>
  );
};

export default Web3Interactions;
