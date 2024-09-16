import React from "react";

const TestResult = () => {
  return (
    <div className="grid grid-cols-4 mx-4 gap-2 my-2">
      <TestOutput />
      <TestOutput />
      <TestOutput />
    </div>
  );
};

export default TestResult;
function TestOutput() {
  return (
    <div className="border-[2px] w-24 h-16 flex flex-col items-center justify-center my-2">
      <h1 className="">Test 1</h1>
      <p>✔️</p>
    </div>
  );
}
