"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";
// import HomeR from "./home/page";
import { useState } from "react";
import LandingPage from "./dashboard/page";
// import LandingPage from "@/components/Navbar";

export default function Home() {
  const { status } = useSession();
  const [loading,setLoading] = useState();

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <>
          {/* <LandingPage/> */}
          <Link href="/dashboard"/>
          
        {/* <button
          className="text-[#888] text-sm text-999 mt-7 transition duration-150 ease hover:text-white"
          onClick={() => {
            signOut();
          }}
        >
          Logout here
        </button>
        <HomeR/> */}
        {/* <LandingPage/> */}
        <LandingPage/>

        </>


      )
    } else if (status === "loading") {
      return (
        <span className="text-[#888] text-sm mt-7">Loading...</span>
      )
    } else {
      return (
        <Link
          href="/login"
          className="text-[#888] text-sm text-999 mt-7 transition duration-150 ease hover:text-white"
        >
          Login here
        </Link>
      )
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {/* <h1 className="text-xl">NextAuth APP</h1> */}
      {showSession()}
      
    </main>
  );
}
