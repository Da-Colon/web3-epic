import { FC } from "react";
import Web3Interactions from "../../components/Web3Interactions";

export enum SandboxOptions {
  Interactions,
  None,
}

interface SandboxProps {
  sandbox: SandboxOptions;
}

const Sandbox: FC<SandboxProps> = ({ sandbox }) => {
  switch (sandbox) {
    case SandboxOptions.Interactions:
      return <Web3Interactions />;
    default: {
      return null;
    }
  }
};

export default Sandbox;
