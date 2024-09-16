"use client";
import React, { useState } from "react";
import SubmissionBar from "./SubmissionBar";
import LanguageSelector from "./LanguageSelector";
import CodeBox from "./CodeBox";
import TestResult from "./TestResult";

const ProgrammingBox = () => {
  return (
    <div className=" hidden md:flex md:flex-1">
      <div className=" w-full py-1 px-2 flex flex-col gap-y-2">
        <SubmissionBar />
        <LanguageSelector />
        <CodeBox />
        <TestResult />
      </div>
    </div>
  );
};

export default ProgrammingBox;
