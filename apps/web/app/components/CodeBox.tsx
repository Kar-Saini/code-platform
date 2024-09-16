import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeBox = () => {
  const [code, setCode] = useState<string | undefined>(
    "// Write your code here..."
  );
  return (
    <Editor
      height="450px"
      defaultLanguage="javascript"
      defaultValue={code}
      theme="vs-dark"
      onChange={(value) => setCode(value)}
    />
  );
};

export default CodeBox;
