import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import Logo from '../../public/LogoCompleta.png';
import { Menu, Transition } from '@headlessui/react';
import { BsPerson, BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useSession, signIn, signOut } from 'next-auth/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  // console.log(session);

  return (
    <div className='nav-style fixed h-14 w-full flex flex-nowrap items-center p-7 mb-[2px] z-10 text-lg'>
      {/* Left Side */}
      <div className='flex grow items-center justify-start'>
        <Link href='/'>
          <a className='flex'>
            <Image
              src={Logo}
              alt='/'
              width='80'
              height='36'
              className='cursor-pointer z-10'
            />
          </a>
        </Link>
        <div className='p-4'>
          <Menu as='div' className='relative text-left'>
            <div className='flex'>
              <Menu.Button>
                <BsThreeDotsVertical size={20} />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#ffffff] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2'
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      {/* Right Side */}
      <div className='hidden md:flex grow items-center justify-end'>
        <div className='flex items-center'>
          <ul className="w-full flex space-x-4">
            <li>
              <a href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/informese">
                Informe-se
              </a>
            </li>
            <li>
              <a href="/pesquisa">
                Pesquisa
              </a>
            </li>
            <li>
              <a href="/agenda">
                Agenda
              </a>
            </li>
            <li>
              <a href="/noticias" >
                Blog
              </a>
            </li>
            <li>
              <a href="/indicacoes">
                Indicações
              </a>
            </li>
            <li>
              <a href="/labin" >
                LABIN
              </a>
            </li>
            <li>
              <a href="/contact">
                Contato
              </a>
            </li>
          </ul>

        </div>

      </div>

      {/* Hamburger Menu */}
      <div onClick={handleNav} className='block md:hidden z-10 cursor-pointer'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'nav-mobile md:hidden fixed top-0 left-0 w-full h-screen flex justify-center items-center ease-in duration-300'
            : 'md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300'
        }
      >
        <ul className='text-center'>
          <li onClick={() => setNav(false)}>
            <Link href='/'>Home</Link>
          </li>
          <li onClick={() => setNav(false)}>
            <Link href='/informese'>Informe-se</Link>
          </li>
          <li onClick={() => setNav(false)}>
            <Link href='/pesquisa'>Pesquisa</Link>
          </li>
          <li onClick={() => setNav(false)}>
            <Link href='/agenda'>Agenda</Link>
          </li>
          <li onClick={() => setNav(false)}>
            <Link href='/noticias'>Blog</Link>
          </li>
          <li onClick={() => setNav(false)}>
            <Link href='/indicacoes'>Indicações</Link>
          </li>
          <li onClick={() => setNav(false)}>
            <Link href='/labin'>Labin</Link>
          </li>
          <li onClick={() => setNav(false)}>
            <Link href='/contact'>Contato</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;