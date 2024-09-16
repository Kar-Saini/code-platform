import React from "react";
import TestCase from "./TestCase";

const ProblemStatement = () => {
  return (
    <div className="flex-1 md:border-r-2 mr-10">
      <div className="flex  flex-col gap-y-6">
        <div className="flex flex-col gap-y-8">
          <h1 className="font-bold text-3xl ">Problem Statement</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            illum.
          </p>
        </div>
        <TestCase />
      </div>
    </div>
  );
};

export default ProblemStatement;
