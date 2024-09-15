import clsx from "clsx";
import Link from "next/link";
import React from "react";

const NavLink = ({
  href,
  label,
  underline,
}: {
  href: string;
  label: string;
  underline: boolean;
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        !underline && " hover:cursor-pointer hover:scale-105 transition",
        underline && "underline underline-offset-2 "
      )}
      prefetch={false}
    >
      {label}
    </Link>
  );
};

export default NavLink;
