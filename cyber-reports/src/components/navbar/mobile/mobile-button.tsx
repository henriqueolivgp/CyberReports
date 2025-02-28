"use client";
import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MobileLi } from "./mobile-li/mobile-li";

export const MobileMenu = () => {
  const [isLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section className="flex justify-center items-center xl:hidden" ref={dropdownRef}>
        <section>
          <button
            className=" w-full text-slate-300 rounded-sm flex justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </button>
        </section>
        <section
          className={`z-10 top-14 font-normal right-2 w-28 bg-slate-800 divide-y divide-slate-400 border rounded-lg shadow-sm ${
            isOpen ? "absolute" : "hidden"
          }`}
        >
          <ul className="py-2 text-sm text-slat-400">
            <MobileLi to="/reports" name="Reports" />
            <MobileLi to="/reports" name="Explore" />
            <MobileLi to="/reports" name="About us" />
            {!isLoggedIn && (
              <>
                <MobileLi to="/sign-up" name="Sign-up" />
                <MobileLi to="/sign-in" name="Sign-in" />
              </>
            )}
            {isLoggedIn && (
              <>
                <MobileLi to="/" name="Logout" />
              </>
            )}
          </ul>
        </section>
      </section>
    </>
  );
};
