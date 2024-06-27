import { Flex, Heading } from "@chakra-ui/react";
import { DiffViewer } from "./components/DiffViewer";
import { InputForm } from "./components/InputForm";
import { useInputValue } from "./hooks";
import { leftInputSubject$, rightInputSubject$ } from "./model";
import "./App.css";

export const App: React.FC = () => {
  const { leftError, rightError } = useInputValue();

  return (
    <div>
      <header>
        <Heading as="h1" textAlign="center" margin="0 auto 16px 0">
          Json Compare
        </Heading>
      </header>
      <main>
        <Flex direction="row">
          <InputForm inputSubject$={leftInputSubject$} error={leftError} />
          <InputForm inputSubject$={rightInputSubject$} error={rightError} />
        </Flex>
        <DiffViewer />
      </main>
    </div>
  );
};
