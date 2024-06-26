import { leftInputText$, rightInputText$ } from "./model";
import { InputForm } from "./components/InputForm";
import { DiffViewer } from "./components/DiffViewer";
import { useInputValue } from "./hooks";
import "./App.css";
import { Flex } from "@chakra-ui/react";

function App() {
  const { leftError, rightError } = useInputValue();

  return (
    <>
      <div>
        <Flex direction="row">
          <InputForm inputSubject$={leftInputText$} error={leftError} />
          <InputForm inputSubject$={rightInputText$} error={rightError} />
        </Flex>
        <DiffViewer />
      </div>
    </>
  );
}

export default App;
