import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/LogoCompleta.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="nav-style fixed h-14 w-full flex flex-nowrap items-center p-7 mb-[2px] z-10 text-lg">
      {/* Left Side */}
      <div className="flex grow items-center justify-start">
        <Link href="/" className="flex">
            <Image
              src={Logo}
              alt="/"
              width="80"
              height="36"
              className="cursor-pointer z-10"
            />
        </Link>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex grow items-center justify-end">
        <div className="flex items-center">
          <ul className="w-full flex space-x-4">
            <li>
               <Link href="/">Home</Link>
            </li>
            <li>
               <Link href="/informese">Informe-se</Link>
            </li>
            <li>
               <Link href="/pesquisa">Pesquisa</Link>
            </li>
            <li>
               <Link href="/agenda">Agenda</Link>
            </li>
            <li>
               <Link href="/noticias">Blog</Link>
            </li>
            <li>
               <Link href="/indicacoes">Indicações</Link>
            </li>
            <li>
               <Link href="/labin">LABIN</Link>
            </li>
            <li>
               <Link href="/contact">Contato</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div onClick={handleNav} className="block md:hidden z-10 cursor-pointer">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "nav-mobile md:hidden fixed top-0 left-0 w-full h-screen flex justify-center items-center ease-in duration-300"
            : "md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300"
        }
      >
        <ul className="text-center">
          <li onClick={() => setNav(false)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setNav(false)}>
            <Link href="/informese">Informe-se</Link>
          </li>
          <li onClick={() => setNav(false)}>
            <Link href="/pesquisa">Pesquisa</Link>
          </li>
          <li onClick={() => setNav(false)}>
            <Link href="/agenda">Agenda</Link>
          </li>
          <li onClick={() => setNav(false)}>
            <Link href="/noticias">Blog</Link>
          </li>
          <li onClick={() => setNav(false)}>
            <Link href="/indicacoes">Indicações</Link>
          </li>
          <li onClick={() => setNav(false)}>
            <Link href="/labin">Labin</Link>
          </li>
          <li onClick={() => setNav(false)}>
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
