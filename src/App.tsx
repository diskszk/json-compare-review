import { leftInputText$, rightInputText$ } from "./model";
import { InputForm } from "./components/InputForm";
import { DiffViewer } from "./components/DiffViewer";
import { useInputValue } from "./hooks";

function App() {
  const { leftError, rightError } = useInputValue();

  return (
    <>
      <div>
        <div>
          <InputForm inputSubject$={leftInputText$} error={leftError} />
          <InputForm inputSubject$={rightInputText$} error={rightError} />
        </div>
        <hr />
        <div>
          <DiffViewer />
        </div>
      </div>
    </>
  );
}

export default App;
