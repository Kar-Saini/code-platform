import React from "react";

const SubmissionBar = () => {
  return (
    <div className=" flex  bg-neutral-100 py-1 w-1/2 rounded-md gap-4 justify-center">
      <button className="py-1 px-6 m-1 bg-white rounded-md">Submit</button>
      <button className="py-1 px-6  m-1 bg-white rounded-md">
        Submissions
      </button>
    </div>
  );
};

export default SubmissionBar;
