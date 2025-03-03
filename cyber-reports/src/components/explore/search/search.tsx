"use client"
import { useState } from 'react';

export const Search = () => {
  // Estado para controlar a visibilidade do campo de pesquisa
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar a visibilidade
  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className='w-4/5 flex-1 justify-center items-center'>
        {/* Botão que alterna a visibilidade do campo de pesquisa */}
        <button
          type="button"
          onClick={toggleSearch} // Chama a função de alternância ao clicar
          aria-controls="navbar-search"
          aria-expanded={isOpen ? 'true' : 'false'}
          className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>

        {/* Campo de pesquisa, visível apenas quando "isOpen" for true */}
        <div className={`relative ${isOpen ? 'block' : 'hidden'} md:block`}>
          <div className="absolute inset-y-0 start-0 flex items-center lg:ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 hidden lg:flex text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
      </section>
    </>
  );
};
