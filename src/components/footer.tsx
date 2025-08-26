import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8 text-sm text-neutral-600 dark:text-neutral-400">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Property Renting</p>
        <div className="flex gap-4">
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <Link href="#" className="hover:underline">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
