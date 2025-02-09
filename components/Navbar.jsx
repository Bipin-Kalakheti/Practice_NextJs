import React from "react";
import Link from "next/link";
const Links = [
  { href: "/counter", text: "Counter" },
  { href: "/bar", text: "Bar" },
  { href: "/todo-list", text: "Todo List" },
  { href: "/query", text: "Query" },
  { href: "/prisma", text: "Prisma" },
];

const Navbar = () => {
  return (
    <nav className="bg-base-300">
      <div className="navbar max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
        <ul className="menu md:ml-8 flex-col sm:flex-row">
          {Links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
