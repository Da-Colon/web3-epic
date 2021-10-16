import { FC } from "react";
import Form from "../Form";

interface ContractFormProps {
  handleSubmit: (address: string, numOfAccounts: string) => void;
  address: string,
  numOfAccounts: string,
}

const ContractForm: FC<ContractFormProps> = (props) => {
  return <Form isContractForm={true} classes="contract-form" title="contract form" {...props} />;
};

export default ContractForm;
