"use client";

import { signIn, signOut } from "next-auth/react";

export function Logout() {
  return (
    <button
      onClick={() => signOut()}
      className="flex items-center justify-center gap-2 rounded-l-3xl rounded-t-3xl bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white ring-red-300 transition duration-100 hover:bg-red-600 md:text-base"
    >
      Wyloguj
    </button>
  );
}

export function NavLogin() {
  return (
    <button
      onClick={() => signIn('github')}
      className="flex items-center justify-center gap-2 rounded-l-3xl rounded-t-3xl bg-teal-500 px-8 py-3 text-center text-sm font-semibold text-white ring-teal-300 transition duration-100 hover:bg-teal-600 md:text-base"
    >
      Zaloguj
    </button>
  );
}

export function MainLogin() {
    return (
      <div className="flex flex-col gap-4" >
      <button
        onClick={() => signIn('github')}
        className="w-full flex items-center justify-center gap-2 rounded-l-3xl rounded-t-3xl bg-teal-500 px-8 py-3 text-center text-sm font-semibold text-white ring-teal-300 transition duration-100 hover:bg-teal-600 md:text-base"
      >
        Zaloguj przez Github
      </button>
      <button
      onClick={() => signIn('facebook')}
      className="w-full flex items-center justify-center gap-2 rounded-l-3xl rounded-t-3xl bg-teal-500 px-8 py-3 text-center text-sm font-semibold text-white ring-teal-300 transition duration-100 hover:bg-teal-600 md:text-base"
    >
      Zaloguj przez Facebook
    </button>
    <button
      onClick={() => signIn('google')}
      className="w-full flex items-center justify-center gap-2 rounded-l-3xl rounded-t-3xl bg-teal-500 px-8 py-3 text-center text-sm font-semibold text-white ring-teal-300 transition duration-100 hover:bg-teal-600 md:text-base"
    >
      Zaloguj przez Google
    </button>
    </div> 
    );
  }

  
