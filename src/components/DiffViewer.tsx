import { Spinner, Box } from "@chakra-ui/react";
import ReactDiffViewer from "react-diff-viewer";
import { useInputValue } from "../hooks";

export const DiffViewer: React.FC = () => {
  const { leftInputValue, rightInputValue, loading } = useInputValue();

  return (
    <Box position="relative">
      {loading && (
        <Box
          height="100%"
          width="100%"
          opacity="0.5"
          display="flex"
          position="absolute"
          backgroundColor="gray.300"
          alignItems="center"
        >
          <Spinner size="xl" thickness="4px" color="blue.500" margin="0 auto" />
        </Box>
      )}
      <ReactDiffViewer
        oldValue={leftInputValue}
        newValue={rightInputValue}
        splitView={true}
        showDiffOnly={false}
        leftTitle={" "}
        rightTitle={" "}
      />
    </Box>
  );
};
