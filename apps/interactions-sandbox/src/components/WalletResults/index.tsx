import { FC } from "react";
import { WalletInteractionsResponse, Token } from "../../types/web3Interactions";
import TextAndValue from "../TextAndValue";
import "./styles.css";
interface ResultsDisplayProps {
  walletResults: WalletInteractionsResponse;
  isTokenLoading: boolean;
  error: string;
}

const ResultsDisplay: FC<ResultsDisplayProps> = ({ walletResults, isTokenLoading, error }) => {
  if (isTokenLoading) {
    return <div className="loading results-wrapper">Loading.....</div>;
  }
  if (error) {
    return <div className="loading results-wrapper">{error}</div>;
  }
  if (walletResults.success) {
    return (
      <div className="results-wrapper">
        <div className="results-container">
          <TextAndValue title="token interactions:" value={walletResults.result.numOfTokens} />
          <TextAndValue title="contract interactions:" value={walletResults.result.numOfContracts} />
          <div className="mapped-tokens">
            {walletResults.result.tokens.map((token: Token) => (
              <div className="mapped-token">
                {/* todo Link Etherscan */}
                <div className="token-image-container"> 
                  <img alt="" src={token.image || ""} />
                </div>
                <TextAndValue title="name" value={token.name || "-"} />
                <TextAndValue title="symbol" value={token.symbol || "-"} />
                <TextAndValue title="address" value={token.contractAddress || "-"} />
                <TextAndValue title="description" value={token.description || "-"} />
                <TextAndValue title="total supply" value={token.totalSupply || "-"} />
                <TextAndValue title="website" value={token.homePageUrl || "-"} />
                <TextAndValue title="twitter" value={token.twitterScreenName || "-"} />
                <TextAndValue title="telegram" value={token.telegramChannelIdentifier || "-"} />
                <TextAndValue title="reddit" value={token.subRedditURL || "-"} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return <div className="results-wrapper"></div>;
};

export default ResultsDisplay;
