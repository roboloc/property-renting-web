import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Logo href="/" className="flex items-center gap-2 font-semibold" />

        <div className="flex items-center gap-2">
          <Link href="/login" className="text-sm hover:underline">
            Log in
          </Link>
          <Link
            href="/register"
            className="text-sm rounded-full px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800"
          >
            Sign up
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
