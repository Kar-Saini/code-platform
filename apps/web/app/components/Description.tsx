import Link from "next/link";

const Description = () => {
  return (
    <section className="flex items-center py-6 px-2">
      <div className="flex flex-col flex-1 px-2 gap-y-4">
        <span className="text-4xl font-bold">Welcome to Codex</span>
        <span className="text-neutral-500">
          Codex is a platform to solve coding problems and enhance your coding
          skills.
        </span>
        <div className="flex py-8 gap-x-4">
          <button className="px-2 py-1 hover:cursor-pointer hover:scale-105 transition border-[2px] border-gray-800 rounded-md bg-gray-700 text-white ">
            <Link href="/prolems">Solve Problems</Link>
          </button>
          <button className="px-2 hover:cursor-pointer hover:scale-105 transition py-1 border-[2px] border-gray-800 rounded-md">
            <Link href="/standings">Leaderboard</Link>
          </button>
        </div>
      </div>
      <div className="flex flex-1">Image</div>
    </section>
  );
};

export default Description;
