"use client";
import { useState, useEffect, useRef } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CiUser } from "react-icons/ci";
import NavLink from "./NavLink";

const Navbar = () => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [isMouseOverDropDown, setIsMouseOverDropDown] =
    useState<boolean>(false);
  const session = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleDropDown: () => void = () => {
    setDropDown(!dropDown);
  };
  useEffect(() => {
    if (dropDown) {
      if (!isMouseOverDropDown) {
        timeoutRef.current = setTimeout(() => setDropDown(false), 4000);
      }
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [dropDown, isMouseOverDropDown]);

  return (
    <header className="  bg-gray-900 w-full flex items-center justify-between text-white px-6 md:px-8 py-3 ">
      <Link
        href="/"
        className="text-lg gap-2 flex items-center"
        prefetch={false}
      >
        <span>{"< / >"}</span>
        <span className="text-xl font-semibold gap-2 tracking-wider">
          Codex
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <NavLink
          href="/dashboard"
          label="Dashboard"
          underline={pathname === "/dashboard"}
        />
        <NavLink
          href="/problems"
          label="Problems"
          underline={pathname === "/problems"}
        />
        <NavLink
          href="/standings"
          label="Standings"
          underline={pathname === "/standings"}
        />
      </nav>
      {session.status === "authenticated" ? (
        <span className="flex flex-c">
          <span className="flex justify-center items-center gap-2">
            {session.data.user?.name}
            <CiUser
              className="text-lg shadow-sm hover:scale-115 hover:cursor-pointer transition"
              onClick={toggleDropDown}
            />
          </span>
          {dropDown && (
            <div
              className="absolute right-6 top-12 bg-gray-800 p-2 rounded-md text-gray-300 shadow-xl hover:scale-105 hover:cursor-pointer transition"
              onMouseEnter={() => setIsMouseOverDropDown(true)}
              onMouseLeave={() => setIsMouseOverDropDown(false)}
              onClick={() => signOut()}
            >
              Logout
            </div>
          )}
        </span>
      ) : (
        <div
          className="hover:cursor-pointer hover:underline hover:underline-offset-4 hover:scale-105 transition"
          onClick={() => router.push("/auth")}
        >
          {pathname !== "/auth" ? "Login/Sigin" : ""}
        </div>
      )}
    </header>
  );
};

export default Navbar;
