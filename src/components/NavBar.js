/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../media/Tipsy-main-logo.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
   Redirect,
} from 'react-router-dom';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function NavBar({ isLoggedIn, token, logOut, currentUser }) {
  // console.log(currentUser)
  return (
    <Disclosure as="nav" className="bg-brand-yellow">
      {({ open }) => (
        <>
          <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="block w-auto h-8 pb-2 lg:hidden"
                    src={Logo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden w-auto pb-4 mt-4 h-11 lg:block"
                    src={Logo}
                    alt="Tipsy"
                  /> 
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link style={isLoggedIn ? {display: 'none'} : {}} to ="/login" className="px-3 py-2 text-base font-medium text-white rounded-md bg-brand-red hover:bg-brand-beau-blue focus:outline-none focus:border-brand-beau-blue font-bebas-neue">
                      Login
                    </Link>
                    <a
                      href="/"
                      className="px-3 py-2 text-base font-medium rounded-md to-brand-dark-blue hover:bg-brand-yellow hover:text-white focus:outline-none focus:border-brand-beau-blue font-bebas-neue"
                    >
                      Discover
                    </a>
                  <Link style={token ? {} : {display: 'none'}} to={`/Userprofile/${currentUser.user_id}`}
                      className="px-3 py-2 text-base font-medium rounded-md text-brand-dark-blue hover:bg-brand-red hover:text-white focus:outline-none focus:border-brand-beau-blue font-bebas-neue"
                      >
                      My Profile
                    </Link>
                    {/* <a
                      href="/"
                      className="px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-brand-yellow hover:text-white focus:outline-none focus:border-brand-beau-blue"
                    >
                      Search
                    </a> */}
                    <>
                   {   isLoggedIn ? (
          <a className="px-3 py-2 text-base font-medium tracking-wider rounded-md hover:bg-brand-red text-brand-dark-blue hover:text-white focus:outline-none focus:border-brand-beau-blue font-bebas-neue" onClick={logOut}>Sign Out</a>
        ) : ( 
          <Redirect to="/login" 
        /> )}
        </>
                  </div>
                </div>
              </div>
            
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                  {/* <button className="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                  </button> */}

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>

                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                to={`/Userprofile/${currentUser.user_id}`}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Your Profile
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                onClick={() => logOut()}
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Sign out
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>
              <div className="flex -mr-2 sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <a href="/" className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md">
                Discover
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="ml-3">
                  <div className="text-base font-medium text-white font-bebas-neue">{currentUser.username}</div>
                  <div className="text-sm font-medium text-gray-400">{currentUser.email}</div>
                </div>

              </div>
              <div className="px-2 mt-3 space-y-1">
                <Link
                style={isLoggedIn ? {} : {display: 'none'}}
                  to={`/Userprofile/${currentUser.user_id}`}
                  className="block px-3 py-2 font-bebas-neue text-base font-medium text-white rounded-md hover:text-white hover:bg-gray-700"
                >
                  Your Profile
                </Link>
                <a
                  href="/"
                  style={isLoggedIn ? {} : {display: 'none'}} onClick={() => logOut()}
                  className="block px-3 py-2 text-base font-medium font-bebas-neue text-white rounded-md hover:text-white hover:bg-gray-700"
                >
                  Sign out
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
