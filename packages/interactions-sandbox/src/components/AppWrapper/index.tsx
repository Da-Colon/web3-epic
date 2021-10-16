import { ReactNode } from "react";
import Header from "../Header";
import './styles.css'

interface AppWrapperProps {
  children: ReactNode | ReactNode[];
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <div className="app-wrapper">
      <Header />
      {children}
    </div>
  );
};

export default AppWrapper;
