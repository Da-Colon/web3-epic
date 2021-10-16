import { FC } from "react";
import Form from "../Form";

interface WalletFormProps {
  handleSubmit: (address: string, numOfAccounts: string) => void;
  address: string;
}

const WalletForm: FC<WalletFormProps> = (props) => {
  return <Form classes="wallet-form" title="wallet form" {...props} />;
};

export default WalletForm;