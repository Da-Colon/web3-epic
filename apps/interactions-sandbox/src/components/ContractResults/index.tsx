import { FC } from "react"
import { ContractInteractionsResponse } from "../../types/web3Interactions"
import './styles.css'
interface ResultsDisplayProps {
  contractResults: ContractInteractionsResponse;
  isContractLoading: boolean;
  error: string
}

const ResultsDisplay: FC<ResultsDisplayProps> = ({contractResults, isContractLoading, error}) => {
  if (isContractLoading) {
    return <div className="loading results-wrapper">Loading.....</div>;
  }
  if (error) {
    return <div className="loading results-wrapper">{error}</div>;
  }
  return (
    <div className="results-wrapper">
      <div className="results-container">

      </div>
    </div>
  )
}

export default ResultsDisplay