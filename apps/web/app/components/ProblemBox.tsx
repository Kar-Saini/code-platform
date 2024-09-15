import Link from "next/link";
import React from "react";
const problemId = "123";
const ProblemBox = () => {
  return (
    <div className="px-6 py-4 w-80 h-52 clear-start border-[2px] rounded-lg  flex flex-col justify-between">
      <div className="">
        <h1 className="text-xl font-bold">Title</h1>
        <p className="text-sm text-neutral-500">Decription</p>
      </div>
      <div className="flex justify-between text-md">
        <div>
          <h2>Difficulty</h2>
          <p className="text-neutral-500 text-sm">Medium</p>
        </div>
        <div>
          <h2>Submmisons</h2>
          <p className="text-neutral-500 text-sm">1</p>
        </div>
      </div>
      <div>
        <button className="bg-slate-800 text-white p-2 rounded-lg hover:scale-105 transition text-xs font-semibold">
          <Link href={`/problem/${problemId}`}>View Problem</Link>
        </button>
      </div>
    </div>
  );
};

export default ProblemBox;
