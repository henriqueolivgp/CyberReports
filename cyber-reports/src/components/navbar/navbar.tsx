"use client";
import { useState } from "react";
import { Li } from "./li's/li";
import { Logo } from "./logo/logo";
import { MobileMenu } from "./mobile/mobile-button";
// import { SearchInput } from "./search/search";

export default function Navbar() {
  const [isLoggedIn] = useState(false);

  return (
    <>
      <nav className="relative flex bg-transparent w-full p-4 items-center justify-between">
        <section className="flex gap-8">
          <Logo />
          <section>{/* <SearchInput /> */}</section>
        </section>
        <section className="hidden xl:flex">
          <ul className=" flex gap-16 font-semibold ">
            <Li to="/explore" name="Explore" />
            <Li to="/about-us" name="About us" />
            {!isLoggedIn && (
              <>
                <Li to="/sign-up" name="Sign-up" />
                <Li to="/sign-in" name="Sign-in" />
              </>
            )}
          </ul>
        </section>

        <MobileMenu />
      </nav>
    </>
  );
}
