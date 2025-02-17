import Image from "next/image";
import Link from "next/link";

function ErrorPage() {
  return (
    <>
      <div className=" bg-gray-500 h-screen lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Sorry but you tried to access something that doesn&apos;t
                  exist
                </h1>
                <p className="my-2 text-black"> 
                  Sorry about that! Please visit our HomePage to get where you
                  need to go.
                </p>
                <Link href="/">
                  <button className="sm:w-full lg:w-auto my-2 md:py-4 px-8 rounded-lg text-center bg-blue-400 text-white hover:bg-blue-500 focus:outline-none focus:ring-2  focus:ring-blue-600 focus:ring-opacity-50">
                    Let&apos;s go Home
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="https://i.ibb.co/G9DC8S0/404-2.png"
                alt={""}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div>
          <Image
            src="https://i.ibb.co/ck1SGFJ/Group.png"
            alt={""}
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
