// import home_banner from "@/assets/home_banner.png";
import { Banner } from "@/components/landing-page/banner/banner";
import { Intro } from "@/components/landing-page/intro/intro";
import { Specialists } from "@/components/landing-page/specialists/specialists";
import { TopReports } from "@/components/landing-page/top-reports/top-reports";
import Image from "next/image";

function Home() {
  return (
    <>
      <Image
        src="/World.jpg"
        alt="World Background"
        className="absolute top-0 z-[-2] h-screen w-full bg-cover filter brightness-70 blur-5"
        width={500}
        height={500}
      />
      <section className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-[-1]"></section>
      <section className="container  flex items-center min-h-screen max-h-full w-full">
        <section className="flex ml-[10%]">
          <Intro />
        </section>
      </section>
        <section className="relative flex flex-col overflow-hidden bg-white">
          <Specialists />
          <TopReports />
          <Banner />
        </section>

      {/* <div className="flex flex-wrap -mx-3 mb-5 mt-44">
        <div className="w-full max-w-full px-3 mb-6  mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-200 bg-white m-5">
            
            <div className="flex-auto block py-8 px-9">
              <div>
                <div className="mb-9 text-center">
                  <h1 className="mb-2 text-[1.75rem] text-center font-semibold text-dark">
                    Users
                  </h1>
                  <span className="text-[1.15rem]  font-medium text-muted">
                    {" "}
                    Meet our talented team, a dynamic group of experts driven by
                    passion and innovation.{" "}
                  </span>
                </div>
                <div className="flex w-full">
                  <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16"></div>
                  <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                    <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                      <Image
                        className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar2.jpg"
                        alt="avarat image"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="text-center">
                      <a
                        href="#"
                        className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                      >
                        Benjamin Martinez
                      </a>
                      <span className="block font-medium text-muted">
                        Sales Executive
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                    <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                      <Image
                        className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar5.jpg"
                        alt="avarat image"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="text-center">
                      <a
                        href="#"
                        className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                      >
                        Emily Turner
                      </a>
                      <span className="block font-medium text-muted">
                        Customer Support
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                    <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                      <Image
                        className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar24.jpg"
                        alt="avarat image"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="text-center">
                      <a
                        href="#"
                        className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                      >
                        Jason Anderson
                      </a>
                      <span className="block font-medium text-muted">
                        Development Engineer
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                    <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                      <Image
                        className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar23.jpg"
                        alt="avarat image"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="text-center">
                      <a
                        href="#"
                        className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                      >
                        Olivia Carter
                      </a>
                      <span className="block font-medium text-muted">
                        Creative Director
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <section className="banner bg-violet-100 h-auto w-full mb-10 mt-10">
        <div className="Text-Button flex flex-col relative z-10 xl:flex-row">
          <div className="w-full absolute overflow-hidden h-auto xl:relative flex items-center content-center">
            <>
              <Image
                className="w-screen h-full object-cover"
                src={home_banner}
                alt="banner"
              />
              <div className="banner-content absolute ml-20">
                <a className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white text-justify">
                  Vamos começar!
                </a>
                <p className="mb-3 font-normal text-white dark:text-gray-400 text-justify">
                  Registe-se aqui para iniciar a sua colaboração connosco e
                  <br />
                  ajudar mais pessoas através das suas denúncias.
                </p>
                <a
                  href="/signup"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-bluelite bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
              </div>
            </>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Home;
