"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "./ui/button";
import { michroma } from "@/assets/fonts";

const Navbar = () => {
  const router = useRouter();
  const session = useSession();

  // console.log("ini isi session user", session.data?.user);
  const logout = () => {
    signOut({ redirect: false });
    router.push("/login");
  };

  return (
    <nav className="mx-auto flex w-full items-center justify-between rounded-b-4xl border bg-[#fdfdfd] p-4 px-30">
      <Link href="/">
        <p className={`text-2xl tracking-wide text-[#6d6c6c]`}>AirRent</p>
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/">Home</Link>
        {!session.data?.user ? (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        ) : (
          <>
            {/* <Link href="/write">Write</Link> */}
            <Link href="/orders">Order</Link>
            {/* <p className="capitalize">{session.data.user.name}</p> */}
            <Button variant="destructive" onClick={logout}>
              Logout
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

//shift + alt + f untuk sorting tailwind
