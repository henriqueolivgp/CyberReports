import { LucideProps } from "lucide-react";
import Image from "next/image";
import { ComponentProps } from "react";

// Define icon type for lucide-react icons
type IconNode = React.ComponentType<LucideProps>;

interface SpecialistCardProps extends ComponentProps<"section"> {
  bgImage: string;
  name: string;
  ShieldIcon: IconNode;
  HeartIcon: IconNode;
  likes: number;
}

export const SpecialistCard = ({
  bgImage,
  name,
  ShieldIcon,
  HeartIcon,
  likes,
}: SpecialistCardProps) => {
  return (
    <>
      <section className="w-full sm:w-[10%] md:w-1/2 lgg:w-[20%] xl:w-[20%] 2xl:w-1/6 mx-2 h-96 shadow-xl shadow-black rounded-lg relative ">
        <section className="absolute z-20 bottom-0 w-full p-2 justify-between">
          <section className="flex gap-1 justify-between items-center">
            <section className="flex w-32 gap-0.5 items-center">
              <a className="truncate">{name}</a>
              {/* Render the component as JSX */}
              <ShieldIcon size={18} />
            </section>
            <section className="flex gap-0.5 items-center">
              <HeartIcon size={18} className=" hover:fill-red-500" />
              <a>{likes}</a>
            </section>
          </section>
        </section>
        <section className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black  z-[10] rounded-lg"></section>
        <Image
          alt="user-image"
          src={bgImage}
          fill
          className="flex object-cover rounded-lg"
        />
      </section>
    </>
  );
};
