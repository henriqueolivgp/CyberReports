"use client";
import { useState, useRef, useEffect } from "react";

export const SortBy = () => {
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
      <section className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="py-2 px-3 text-white font-medium text-lg rounded md:hover:bg-transparent md:border-0 flex items-center"
        >
          Sort by{" "}
          <svg
            className={`w-2.5 h-2.5 ml-2 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (
          <section className="absolute w-44 right-0 left-45 mt-2 z-10 font-normal bg-white sectionide-y sectionide-gray-100 rounded-lg shadow-sm  dark:bg-gray-700 dark:sectionide-gray-600">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
              <li>
                <a
                  href="#projects"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Recents
                </a>
              </li>
              <li>
                <a
                  href="#web-projects"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Last week
                </a>
              </li>
              <li>
                <a
                  href="#mobile-projects"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Last year
                </a>
              </li>
            </ul>
          </section>
        )}
      </section>
    </>
  );
};
