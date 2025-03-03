
"use client"
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const ReportsFilter = () => {

  const [rotate, setRotate] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setRotate(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section className="flex justify-between items-center w-full px-16 pt-4 ">
        <section className="flex justify-center items-center gap-1">
          <button onClick={() => setRotate(!rotate)} className="flex justify-center items-center">
            Most recent
            <ChevronDown size={18} className={`${rotate ? 'rotate-180' : ''}`} />
          </button>
          <section className="">

          </section>
          <h1>reports</h1>
        </section>
        <section>
          <button className="p-3 bg-slate-700 hover:bg-slate-950 rounded-lg text-sm">View more...</button>
        </section>
      </section>
    </>
  );
};
