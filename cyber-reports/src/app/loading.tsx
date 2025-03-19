
import Image from "next/image";

export default function Loading() {
  return (
    <>

        <section className="h-screen w-full flex justify-center items-center ">
          <Image
            src="/loading/the-loveable-zoo-cat.gif"
            width={400}
            height={400}
            alt="loading gif"
          />
        </section>

    </>
  );
}
