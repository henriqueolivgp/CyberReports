import Link from "next/link";
import { ComponentProps } from "react";

interface MobileLiProps extends ComponentProps<"li"> {
  to: string ;
  name: string;
}

export const MobileLi = ({ to, name, ...rest }: MobileLiProps) => {
  return (
    <>
      <li className="block px-4 py-2 hover:bg-gray-100" {...rest}>
        <Link href={to}>{name}</Link>
      </li>
    </>
  );
};
