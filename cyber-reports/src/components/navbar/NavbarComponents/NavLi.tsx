import Link, { LinkProps } from "next/link";

interface NavLiProps extends LinkProps {
    href: string
    name: string
    activeTo: string
}

export function NavLi({ href, name, activeTo, ...rest }: NavLiProps) {
    const isActive = href === activeTo;
    const isHome = activeTo === "/";
    return (
        <li>
            <Link href={href} className={`block  md:p-0 hover:text-bluelite rounded ${isActive? 'text-bluelite': isHome?'text-white' : 'text-black'}`} aria-current="page" {...rest}>{name}</Link>
        </li>
    )
}