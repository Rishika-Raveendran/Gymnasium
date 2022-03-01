import React, { useState, useEffect } from "react"
import { Transition } from "@headlessui/react"
import { Link } from "gatsby"
import Logo from "../images/gym.png"
import "../styles/sidebar.css"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [pathname, setPathname] = useState("/")
  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  let opClass1 = "option uppercase",
    opClass2 = "option uppercase",
    opClass3 = "option uppercase",
    opClass4 = "option uppercase",
    opClass5 = "option uppercase"

  switch (pathname) {
    case "/":
      opClass1 = "option uppercase activeNav"
      break
    case "/customers":
      opClass2 = "option uppercase activeNav"
      break
    case "/trainers":
      opClass3 = "option uppercase activeNav"
      break
    case "/guards":
      opClass4 = "option uppercase activeNav"
      break
    case "/managers":
      opClass5 = "option uppercase activeNav"
      break
  }

  return (
    <>
      <div className="sidebar top-0 left-0 w-[20vw] p-10 fixed h-full ease-in-out duration-300 sm:hidden md:block">
        <ul className="navOptions">
          <li className="logo z-50">
            <img src={Logo} alt="Logo" />
          </li>
          <li>
            {" "}
            <Link to="/">
              <div className={opClass1}>overview</div>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/customers">
              <div className={opClass2}>customers</div>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/trainers">
              <div className={opClass3}>trainers</div>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/guards">
              <div className={opClass4}>guards</div>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/managers">
              <div className={opClass5}>managers</div>
            </Link>
          </li>
        </ul>
      </div>
      <nav className="md:hidden topnav fixed top-0 w-full z-10">
        <div className=" mx-5 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            <div className="-mr-2 flex ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="gray"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {ref => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/">
                  <button
                    onClick={() => {
                      setIsOpen(!isOpen)
                    }}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Overview
                  </button>
                </Link>

                <Link to="/customers">
                  {" "}
                  <button
                    onClick={() => {
                      setIsOpen(!isOpen)
                    }}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Customers
                  </button>
                </Link>

                <Link to="/logbook">
                  <button
                    onClick={() => {
                      setIsOpen(!isOpen)
                    }}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Logs
                  </button>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  )
}

export default Sidebar
