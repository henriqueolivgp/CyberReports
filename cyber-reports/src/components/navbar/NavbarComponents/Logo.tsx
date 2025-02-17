import Image from "next/image";
import Link, { LinkProps } from "next/link";

interface LogoProps extends LinkProps {
    to: string
    name: string
    activeTo: string
}

export function Logo({ to, name, activeTo, ...rest }: LogoProps) {
    const isActive = to === activeTo;
    const isHome = activeTo === "/";
    const LogoisHome = activeTo === "/";
    return (
        <Link className="flex items-center space-x-3 rtl:space-x-reverse " {...rest} href={to}>  
                <Image src={`${isActive? '/CRWhite.png': LogoisHome? '/CRWhite.png' : '/CR.png' }`}  width={65} height={100} className=" font-Ethnocentric " alt="#" />
                <span className={`self-center text-2xl font-semibold whitespace-nowrap ${isActive? 'text-white': isHome?'text-white' : 'text-black'}`}>{name}</span>
        </Link>
    )
}