import React from "react";
import ProblemBox from "../components/ProblemBox";

const ProblemsPage = () => {
  return (
    <div className="grid justify-center items-center max-w-screen-lg mx-auto mt-10 px-4 gap-y-4 ">
      <div className=" flex flex-col gap-y-2">
        <h1 className="text-2xl font-bold">Popular Probelms</h1>
        <p>Checkout the popular programming problems on Codex.</p>
      </div>
      <div className="flex mx-auto gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <ProblemBox />
        <ProblemBox />
        <ProblemBox />
      </div>
    </div>
  );
};

export default ProblemsPage;
