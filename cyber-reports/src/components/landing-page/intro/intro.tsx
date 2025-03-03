export const Intro = () => {
  return (
    <>
      <section className="flex-1 ">
        <section className="flex flex-col space-y-2 p-4 ">
          <h1 className="flex flex-col text-2xl sm:text-left md:text-5xl font-bold tracking-tight space-y-2 ">
            <section>
              <span className="text-blue-500 text-justify">Denuncie</span>,{" "}
              <span className="text-blue-500 text-justify">Proteja</span>,{" "}
              <span className="text-blue-500 text-justify">Previna</span>:
              <br />
            </section>
            <section>
              <span className="text-white text-justify">Juntos Contra</span>{" "}
              <span className="text-blue-500 text-justify">Ciberataques</span>
              <span className="text-white text-justify">!</span>
            </section>
          </h1>

          <p className="w-full md:text-lg sm:text-sm text-sm font-normal text-white text-left">
            A nossa equipa está empenhada em ajudar o utilizador a resolver{" "}
            <br />
            todos os problemas decorrentes de mensagens, emails, chamada <br />
            telefónicas e até mesmo tentativas de ataques cibernéticos e vírus
            <br />
            no seu dispositivo.
          </p>
        </section>
        <section className="flex gap-4 pl-4">
          <button className="w-26 p-2 md:w-36 bg-blue-700 text-slate-100 rounded-md font-semibold">
            Search
          </button>
          <button className="p-2 w-26 md:w-36 bg-slate-300 rounded-md font-semibold text-slate-700 hover:bg-slate-600 hover:text-slate-200">
            Create Account
          </button>
        </section>
      </section>
    </>
  );
};

{
  /* Intro */
}
{
  /* <div className="max-w-lg p-6 bg-transparent">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-bluelite dark:text-white text-justify">
              Denuncie<span className="text-white text-justify">,</span> Proteja
              <span className="text-white text-justify">,</span> Previna
              <span className="text-white text-justify">
                : Juntos Contra
              </span>{" "}
              Ciberataques
              <span className="text-white text-justify">!</span>
            </h5>

            <p className="mb-3 font-normal text-white dark:text-gray-400 text-justify">
              A nossa equipa está empenhada em ajudar o utilizador a resolver
              todos os problemas decorrentes de mensagens, emails, chamadas
              telefónicas e até mesmo tentativas de ataques cibernéticos e vírus
              no seu dispositivo.
            </p>
            <a
              href="/explore"
              className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center text-white bg-bluelite rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Explorar
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="/signup"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-bluelite bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-bluelite dark:focus:ring-blue-800"
            >
              Criar conta
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div> */
}

{
  /* {session && (
              <div className="max-w-lg p-6 bg-transparent">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-bluelite dark:text-white text-justify">
                    Denuncie{" "}
                    <span className="text-white text-justify">
                      aqui os seus problemas
                    </span>{" "}
                    de Cibersegurança
                    <span className="text-white text-justify">!</span>
                  </h5>
                </a>
                <p className="mb-3 font-normal text-white dark:text-gray-400 text-justify">
                  A nossa equipa está empenhada em ajudar o utilizador a
                  resolver todos os problemas decorrentes de mensagens, emails,
                  chamadas telefónicas e até mesmo tentativas de ataques
                  cibernéticos e vírus no seu dispositivo.
                </p>
                <a
                  href="/explore"
                  className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center text-white bg-bluelite rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Explorar
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  onClick={handleLogOut}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-bluelite bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-lite dark:focus:ring-blue-800"
                >
                  Logout
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            )} */
}
