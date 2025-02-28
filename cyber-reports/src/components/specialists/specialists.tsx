import { Heart, ShieldUser } from "lucide-react";
import { SpecialistCard } from "./card/specialist-card";

export const Specialists = () => {
  const experts = [
    {
      name: "Michaela William",
      image: "/specialists/pexels-hikaique-307847.jpg",
      likes: 352,
    },
    {
      name: "Nate Frazier",
      image: "/specialists/pexels-olly-837358.jpg",
      likes: 135,
    },
    {
      name: "Brayden Price",
      image: "/specialists/pexels-olly-845457.jpg",
      likes: 352,
    },
    {
      name: "Jhon Wallace",
      image: "/specialists/pexels-pixabay-39866.jpg",
      likes: 152,
    },
  ];

  return (
    <>
      <section className="flex w-full min:h-96 p-20 max-h-full bg-white dark:bg-slate-800">
        <section className="flex flex-wrap gap-16 w-full justify-center">
          <SpecialistCard bgImage={experts[0].image} name={experts[0].name} ShieldIcon={ShieldUser} HeartIcon={Heart} likes={20}  />
          <SpecialistCard bgImage={experts[1].image} name={experts[1].name} ShieldIcon={ShieldUser} HeartIcon={Heart} likes={20}  />
          <SpecialistCard bgImage={experts[2].image} name={experts[2].name} ShieldIcon={ShieldUser} HeartIcon={Heart} likes={20}  />
          <SpecialistCard bgImage={experts[3].image} name={experts[3].name} ShieldIcon={ShieldUser} HeartIcon={Heart} likes={20}  />
        </section>
      </section>
    </>
  );
};
