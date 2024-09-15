import React from "react";
import SubmissionBar from "./SubmissionBar";
import LanguageSelector from "./LanguageSelector";

const ProgrammingBox = () => {
  return (
    <div className=" hidden md:flex md:flex-1">
      <div className=" w-full m-1 p-4 flex flex-col gap-y-4">
        <SubmissionBar />
        <LanguageSelector />

        <div>
          <code>Hello</code>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProgrammingBox;
