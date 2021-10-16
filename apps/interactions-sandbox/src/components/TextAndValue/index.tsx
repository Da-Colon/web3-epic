import { FC } from "react";
import classnames from "classnames";
import "./styles.css";

interface TextAndValueProps {
  title: string;
  value: string | number | null;
  darkText?: boolean;
}
const TextAndValue: FC<TextAndValueProps> = (props) => {
  return (
    <div className={classnames("text-and-value-container")}>
      <div className={classnames("title", {'text-dark': props.darkText})}>{props.title}</div>
      <div className="value">{props.value}</div>
    </div>
  );
};

export default TextAndValue;
