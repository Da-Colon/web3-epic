import classnames from "classnames";
import React, { FC } from "react";

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  isSmall?: boolean;
}

const Input: FC<InputProps> = ({ label, ...rest }) => {
  if (label) {
    return (
      <div className="flex flex-col">
        <label className="text-sm font-semibold py-2">{label}</label>
        <InputBase {...rest} />
      </div>
    );
  }
  return <InputBase />;
};

interface InputBaseProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  isSmall?: boolean;
}

const InputBase: FC<InputBaseProps> = ({ isSmall, ...rest }) => {
  return <input className={classnames("bg-black text-yellow pl-4 py-2 text-sm rounded-md", { "w-24": isSmall })} {...rest} />;
};
export default Input;
