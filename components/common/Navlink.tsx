import Link from "next/link";
import React from "react";

const NavLink = () => {

    return (
        <div>
            <Link as={`/`} href={`/`}>
                <a>home</a>
            </Link>
            <Link as={`/articles/`} href={`/articles/`}>
                <a>articles</a>
            </Link>
        </div>
    )
};

export default NavLink;
