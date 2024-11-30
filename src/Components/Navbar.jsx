import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';   
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const navigation = [
  { name: 'HOME', href: '#home', current: false },
  { name: 'ABOUT ME', href: '#about', current: false },
  { name: 'RESUME', href: '#resume', current: false },
  { name: 'FAQ', href: '#faq', current: false },
  { name: 'PORTFOLIO', href: '#portfolio', current: false },
  { name: 'WHAT I DO', href: '#What_I_do', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Navbar() {
  return (
    <>
      {/* Navbar Start */}
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* Mobile menu button */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                
                {/* Logo and desktop navigation */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex shrink-0 items-center">
                    {/* Add your logo here */}
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          aria-current={item.current ? 'page' : undefined}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gradient-to-tr from-[#ff4694] to-[#776fff] hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right-side button */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full bg-gradient-to-tr from-[#ff4694] to-[#776fff] p-1 m-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">Mail</span>
                    <FaEnvelope style={{ fontSize: "24px", padding:'2px'}} />
                  </button>
                  <button
                    type="button"
                    className="relative rounded-full m-1 bg-gradient-to-tr from-[#ff4694] to-[#776fff] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">Linked In</span>
                    <a href="https://www.linkedin.com/in/abhinav-mishra-204bb028b"><FaLinkedin style={{ fontSize: "24px", padding:'2px'}} /></a>
                  </button>
                  <button
                    type="button"
                    className="relative rounded-full bg-gradient-to-tr from-[#ff4694] to-[#776fff] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">Contact Us</span>
                   <a href="https://github.com/ironabhi05"> <FaGithub style={{ fontSize: "24px",padding:'2px'}} /></a>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile menu panel */}
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gradient-to-tr from-[#ff4694] to-[#776fff] hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* Navbar End */}
    </>
  );
}

export default Navbar;
