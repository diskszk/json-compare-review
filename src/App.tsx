import { Flex } from "@chakra-ui/react";
import { DiffViewer } from "./components/DiffViewer";
import { InputForm } from "./components/InputForm";
import { useInputValue } from "./hooks";
import { leftInputSubject$, rightInputSubject$ } from "./model";
import "./App.css";

function App() {
  const { leftError, rightError } = useInputValue();

  return (
    <>
      <div>
        <Flex direction="row">
          <InputForm inputSubject$={leftInputSubject$} error={leftError} />
          <InputForm inputSubject$={rightInputSubject$} error={rightError} />
        </Flex>
        <DiffViewer />
      </div>
    </>
  );
}

export default App;
