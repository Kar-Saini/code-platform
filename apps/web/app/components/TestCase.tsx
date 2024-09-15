import React from "react";

const TestCase = () => {
  return (
    <div className="flex flex-col gap-y-6 my-4 ">
      <h1 className="font-bold text-2xl">Test case 1</h1>
      <div className="flex flex-col gap-y-6">
        <p className="font-bold text-lg">Input</p>
        <p className="bg-slate-900 text-neutral-200 py-4 px-4 tracking-widest rounded-lg w-3/4">
          1, 2
        </p>
      </div>
      <div className="flex flex-col gap-y-6">
        <p className="font-bold text-lg">Output</p>
        <p className="bg-slate-900 text-neutral-200 py-4 px-4 tracking-widest rounded-lg w-3/4">
          2
        </p>
      </div>
    </div>
  );
};

export default TestCase;
