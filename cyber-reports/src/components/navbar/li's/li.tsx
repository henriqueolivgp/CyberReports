import Link from "next/link";
import { ComponentProps } from "react";

interface LiProps extends ComponentProps<"li"> {
  to: string;
  name: string;
}

export const Li = ({ to, name }: LiProps) => {
  return (
    <>
      <li>
        <Link href={to}>{name}</Link>
      </li>
    </>
  );
};
