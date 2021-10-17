import { useState } from "react";
import AppWrapper from "./components/AppWrapper";
import Button, { ButtonTypes } from "./components/Button";
import Sandbox, { SandboxOptions } from "./containers/Sandbox";

const SandboxChoices = ({setSandbox}: {setSandbox: React.Dispatch<React.SetStateAction<SandboxOptions>>}) => {
  return (
    <div className="flex justify-center gap-4">
      <Button
        buttonType={ButtonTypes.Standard}
        isLight
        onClick={() => setSandbox(SandboxOptions.Interactions)}
      >
        INTERACTIONS SANDBOX
      </Button>
    </div>
  );
};

function App() {
  const [sandbox, setSandbox] = useState<SandboxOptions>(SandboxOptions.Interactions);
  return (
    <AppWrapper>
      <SandboxChoices setSandbox={setSandbox} />
      <Sandbox sandbox={sandbox} />
    </AppWrapper>
  );
}

export default App;
