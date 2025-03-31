"use client";
import { useState, useRef, useEffect, ComponentProps } from "react";

interface SettingsProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export default function General({ children }: SettingsProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [report, setReport] = useState({ type: "", description: "" });
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as Node;
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
    <>
      {/* Main Content */}
      <section className="flex-1 p-6 bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-bold mb-4">Configurações</h1>
        <section className="flex justify-between items-center mb-4">
          <span>Modo Escuro</span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition duration-300 ease-in-out focus:outline-none"
          >
            <section
              className={`w-5 h-5 bg-white rounded-full shadow-md transform ${
                darkMode ? "translate-x-6" : "translate-x-0"
              }`}
            ></section>
          </button>
        </section>

        {/* Segurança e Privacidade */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Segurança e Privacidade
          </h2>
          <button className="border px-4 py-2 rounded-md mr-2 hover:bg-gray-100 dark:hover:bg-gray-800">
            Ativar 2FA
          </button>
          <button className="border px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            Gerir Dispositivos
          </button>
        </section>

        {/* Gestão de Conta */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Conta</h2>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            Eliminar Conta
          </button>
        </section>

        {/* Reporte de Problemas */}
        <h1 className="text-2xl font-bold mt-10 mb-4">Reporte de Problemas</h1>
        <section className="mb-4 w-1/2">
          <input
            type="text"
            placeholder="Tipo de problema (ex: Hackeado, phishing...)"
            value={report.type}
            onChange={(e) => setReport({ ...report, type: e.target.value })}
            className="w-full border p-2 rounded-md"
          />
        </section>
        <section className="mb-4 w-1/2">
          <textarea
            placeholder="Descreve o problema"
            value={report.description}
            onChange={(e) =>
              setReport({ ...report, description: e.target.value })
            }
            className="w-full border p-2 rounded-md h-32"
          ></textarea>
        </section>
        <section className="flex flex-col justify-center items-center">
          <button className="w-96 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Submeter Reporte
          </button>
        </section>
      </section>
    </>
  );
}
