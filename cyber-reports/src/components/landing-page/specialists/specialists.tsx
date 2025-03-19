"use client";
import { Heart, ShieldUser } from "lucide-react";
import { SpecialistCard } from "./card/specialist-card";
import { motion } from "framer-motion";
import SplitText from "@/react-bits/split-text";

export const Specialists = () => {
  const specialists = [
    {
      id: 1,
      name: "Michaela William",
      image: "/specialists/pexels-hikaique-307847.jpg",
      likes: 352,
    },
    {
      id: 2,
      name: "Nate Frazier",
      image: "/specialists/pexels-olly-837358.jpg",
      likes: 135,
    },
    {
      id: 3,
      name: "Brayden Price",
      image: "/specialists/pexels-olly-845457.jpg",
      likes: 352,
    },
    {
      id: 4,
      name: "Jhon Wallace",
      image: "/specialists/pexels-pixabay-39866.jpg",
      likes: 152,
    },
    {
      id: 5,
      name: "Alice Brown",
      image: "/specialists/pexels-trinitykubassek-445109.jpg",
      likes: 220,
    },
  ];

  // Duplicando para criar um efeito de loop contínuo
  const loopedSpecialists = [...specialists, ...specialists];

  return (
    <section className="flex flex-col items-center w-full min-h-96 p-20  dark:bg-slate-800">
      {/* <h1 text-5xl text-slate-400 mb-6 font-semibold text-center>Specialists</h1> */}
      <SplitText
        text="Specialists"
        className="text-5xl text-slate-400 mb-6 font-semibold text-center"
        delay={150}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        threshold={0.2}
        rootMargin="-50px"
      />
      <div className="relative overflow-hidden w-full ">
        {/* Efeito de desfoque nas bordas */}
        <div className="absolute inset-0 z-20 before:absolute  before:w-10 before:h-full before:bg-gradient-to-r before:from-slate-800 before:to-transparent after:absolute after:right-0 after:top-0 after:w-20 after:h-full after:bg-gradient-to-l after:from-slate-800 after:to-transparent "></div>

        <motion.div
          className="flex space-x-20"
          animate={{
            x: ["0%", "-100%"],
            transition: {
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            },
          }}
        >
          {loopedSpecialists.map((spec, index) => (
            <div
              key={index}
              className="flex-shrink-0 min-w-[80%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%] xl:min-w-[20%]"
            >
              <SpecialistCard
                bgImage={spec.image}
                name={spec.name}
                ShieldIcon={ShieldUser}
                HeartIcon={Heart}
                likes={spec.likes}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
