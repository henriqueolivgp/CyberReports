import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

interface SplitTextProps {
  text: string;
  className?: string;
}

const SplitText: React.FC<SplitTextProps> = ({ text, className }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const split = new SplitType(textRef.current, { types: "chars" });

      gsap.from(split.chars, {
        opacity: 0,
        y: 50,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return <div ref={textRef} className={className}>{text}</div>;
};

export default SplitText;
