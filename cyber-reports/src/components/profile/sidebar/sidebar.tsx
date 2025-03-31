"use client";
import { useState, useRef, useEffect, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface SidebarProps extends ComponentProps<"div"> {
  sectionStyle?: string;
  sectionUlStyle?: string;
  children: React.ReactNode;
}

function SideBar({ sectionStyle, sectionUlStyle, children, ...rest }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as Node;

    // Verifica se o clique foi fora do menu
    if (menuRef.current && !menuRef.current.contains(target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      className={twMerge(
        "absolute flex top-auto left-0 min-h-screen max-h-full",
        sectionStyle
      )}
      ref={menuRef}
      {...rest}
    >
      <button
        type="button"
        onClick={handleClick}
        className=" sm:block lg:hidden inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <section className="flex flex-1 ">
        <aside
          id="default-sidebar"
          className={` absolute z-50 lg:relative ${
            isOpen ? " " : "hidden"
          } xl:block lg:block llg:hidden w-64 h-auto transition-transform sm:-translate-x-0 lg:translate-x-0  `}
          aria-label="Sidebar"
        >
          <section
            className={twMerge(
              " h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800",
              sectionUlStyle
            )}
          >
            <ul className="flex flex-col justify-between h-full space-y-2 font-medium">
              {children}
            </ul>
          </section>
        </aside>
      </section>
    </section>
  );
}

export default SideBar;
