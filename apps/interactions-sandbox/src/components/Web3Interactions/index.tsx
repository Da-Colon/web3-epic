import useWeb3Interactions from "../../hooks/useWeb3Interactions";
// import ContractResults from "../ContractResults";
import WalletResults from "../Results/WalletResults";
import Form, { InteractionsFormTypes } from "../Form";

const Web3Interactions = () => {
  const Web3Interactions = useWeb3Interactions();
  return (
    <div className="flex flex-col gap-8">
      <section className="flex">
        <Form
          formType={InteractionsFormTypes.Wallets}
          handleSubmit={Web3Interactions.fetchWalletInteractions}
          address="0x930aF7923B8B5F8d3461ad1999CEEB8a62884b19"
        />
        <Form
          formType={InteractionsFormTypes.Contracts}
          handleSubmit={Web3Interactions.fetchContractInteractions}
          numOfAccounts="10"
          address="0x7697b462a7c4ff5f8b55bdbc2f4076c2af9cf51a"
        />
      </section>
      <section className="flex">
        <WalletResults
          error={Web3Interactions.error}
          isTokenLoading={Web3Interactions.isTokenLoading}
          // isTokenLoading={true}
          walletResults={Web3Interactions.walletResults}
        />
      </section>
    </div>
  );
};

export default Web3Interactions;
