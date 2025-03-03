import Image from "next/image";

export const Banner = () => {
  return (
    <>
      <section className="relative flex items-center">
        <section className="w-full h-[556px] bg-white">
          <section className="absolute z-10 w-full h-full"></section>
          <div className="relative w-full h-full">
            <Image
              src="/banner/home_banner.png"
              alt="banner"
              className="w-full h-full object-cover"
              layout="fill"
            />
          </div>
        </section>
        <section className="absolute flex-1 ml-[10%] items-center h-auto z-20 w-96">
          <p className="mt-5 font-semibold text-neutral-300">
            Com o Techquiz pode avaliar o seu conhecimento e saber o seu nível
            em todas as diversas áreas de informática.
          </p>
          <button
            type="button"
            className="h-12 mt-5 focus:outline-none text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
          >
            Começar agora!
          </button>
        </section>
      </section>
    </>
  );
};
