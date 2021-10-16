import { FC, useState } from "react";
import "./styles.css";
interface FormProps {
  title: string;
  classes: "wallet-form" | "contract-form";
  handleSubmit: (address: string, numOfAccounts: string) => void;
  isContractForm?: boolean;
  address: string;
  numOfAccounts?: string;
}

const Form: FC<FormProps> = (props) => {
  const [address, setAddress] = useState(props.address);
  const [numOfAccounts, setNumOfAccounts] = useState(props.numOfAccounts || "");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.handleSubmit(address, numOfAccounts);
  };
  return (
    <div className="form-container">
      <div className="form-title">{props.title}</div>
      <form onSubmit={handleSubmit} className={props.classes}>
        <label>{props.isContractForm ? 'contract address' : 'wallet address'}</label>
        <input type="text" onChange={(e) => setAddress(e.target.value)} value={address} />
        {props.isContractForm && (
          <div>
            <label>account number (up to 50)</label>
            <input
              type="text"
              pattern="^[0-9]*$"
              onChange={(e) => setNumOfAccounts(e.target.value)}
              value={numOfAccounts}
            />
          </div>
        )}
        <button type="submit" disabled={!address}>submit</button>
      </form>
    </div>
  );
};

export default Form;
