import classnames from "classnames";
import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

export enum ButtonTypes {
  Standard,
  Text,
}

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  buttonType: ButtonTypes;
  isLight?: boolean;
}

const Button: FC<ButtonProps> = ({ buttonType, children, ...rest }) => {
  switch (buttonType) {
    case ButtonTypes.Standard:
      return (
        <BaseButton {...rest} isStandard>
          {children}
        </BaseButton>
      );
    case ButtonTypes.Text:
      return (
        <BaseButton {...rest} isText>
          {children}
        </BaseButton>
      );
  }
};

interface BaseButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isStandard?: boolean;
  isText?: boolean;
  isLight?: boolean;
}

const BaseButton: FC<BaseButtonProps> = ({ isStandard, isText, isLight, children, ...rest }) => {
  return (
    <button
      className={classnames(
        "focus:outline-none",
        {
          "min-w-24 px-4 py-2 rounded shadow-button text-xs tracking-widest font-bold": isStandard,
          "bg-ebony text-white": !isLight,
          "bg-white text-ebony": isLight,
        },
        { "": isText }
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
