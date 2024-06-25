import ReactDiffViewer from "react-diff-viewer";
import { useInputValue } from "../hooks";

export const DiffViewer: React.FC = () => {
  const { leftInputValue, rightInputValue, loading } = useInputValue();

  return (
    <>
      {loading && <p>Loading...</p>}
      <ReactDiffViewer
        oldValue={leftInputValue}
        newValue={rightInputValue}
        splitView={true}
        leftTitle={"leftCode"}
        rightTitle={"rightCode"}
      />
    </>
  );
};
