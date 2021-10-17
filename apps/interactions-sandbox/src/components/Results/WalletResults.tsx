import { FC } from "react";
import { WalletInteractionsResponse } from "../../types/web3Interactions";
import Loader, { LoaderOptions } from "../Loader";
import Token from "./Token";

interface ResultsDisplayProps {
  walletResults: WalletInteractionsResponse;
  isTokenLoading: boolean;
  error: string;
}

const ResultsDisplay: FC<ResultsDisplayProps> = ({ walletResults, isTokenLoading, error }) => {
  if (isTokenLoading) {
    return <Loader option={LoaderOptions.Standard} />;
  }
  if (error) {
    return <div className="">{error}</div>;
  }
  if (walletResults.success) {
    return (
      <div className="w-full p-4 mx-8">
        <div className="text-2xl text-white font-bold mb-8">wallet interaction results</div>
        <div className="my-2">
          <div className="text-xs underline">contract interactions</div>
          <div className="text-lg font-bold w-min p-1 h-auto flex justify-center items-center my-2 rounded-full bg-white overflow-hidden text-center">{walletResults.result.numOfContracts}</div>
        </div>
        <div className="my-2">
          <div className="text-xs underline">token interactions</div>
          <div className="text-lg font-bold w-min p-1 h-auto flex justify-center items-center my-2 rounded-full bg-white overflow-hidden text-center">{walletResults.result.numOfTokens}</div>
        </div>
        <div className="flex gap-8 flex-1 flex-wrap p-4 items-center justify-evenly">
          {walletResults.result.tokens.map((token) => (
            <Token key={token.id} token={token} />
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default ResultsDisplay;
