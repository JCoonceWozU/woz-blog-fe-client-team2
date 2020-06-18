import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavLinkProps {
    href: string;
    as: string;
    children: React.ReactNode;
}

const NavLink = ({ href, as, children }: NavLinkProps) => {
    // const router = useRouter();
    // const { asPath } = router;
    //
    // return (
    //     <Link href={href} as={as}>
    //         <a className={`nav-link ${encodeURIComponent(asPath) === encodeURIComponent(as) && `active`}`}>
    //             {children}
    //         </a>
    //     </Link>
    // );
};

export default NavLink;
