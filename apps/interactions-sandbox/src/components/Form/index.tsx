import { FC, useState } from "react";
import Button, { ButtonTypes } from "../Button";
import Input from "../Input";

export enum InteractionsFormTypes {
  Wallets,
  Contracts,
}

interface FormTypeProps {
  address: string;
  formType: InteractionsFormTypes;
  handleSubmit: (address: string, numOfAccounts: string) => void;
  numOfAccounts?: string;
}

const Form: FC<FormTypeProps> = ({ formType, ...rest }) => {
  switch (formType) {
    case InteractionsFormTypes.Wallets:
      return <FormBase title="wallet form" {...rest} />;
    case InteractionsFormTypes.Contracts:
      return <FormBase isContractForm={true} title="contract form" {...rest} />;
  }
};

interface FormProps {
  title: string;
  handleSubmit: (address: string, numOfAccounts: string) => void;
  isContractForm?: boolean;
  address: string;
  numOfAccounts?: string;
}

const FormBase: FC<FormProps> = (props) => {
  const [address, setAddress] = useState(props.address);
  const [numOfAccounts, setNumOfAccounts] = useState(props.numOfAccounts || "");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.handleSubmit(address, numOfAccounts);
  };

  return (
    <div className="w-full m-8 p-4 rounded-lg bg-white shadow-button border-dashed border-black border-8">
      <div className="text-lg underline font-bold mb-4 text-right">{props.title}</div>
      <form onSubmit={handleSubmit} className="">
        <Input
          label={props.isContractForm ? "contract address" : "wallet address"}
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
        {props.isContractForm && (
          <Input
            label="account number (up to 50)"
            type="text"
            pattern="^[0-9]*$"
            onChange={(e) => setNumOfAccounts(e.target.value)}
            value={numOfAccounts}
            isSmall
          />
        )}
        <div className="my-8">
        <Button buttonType={ButtonTypes.Standard} type="submit" disabled={!address}>
          SUBMIT
        </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
