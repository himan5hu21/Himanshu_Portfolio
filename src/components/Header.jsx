import { useRef, useEffect, useState } from "react";
import { Link } from "react-scroll";

function Header() {
  const links = {
    home: "Home",
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const drawerRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <section className="sticky top-5 flex justify-between py-3 px-6 md:py-6 md:px-12 items-center shadow-md bg-slate-800/85 rounded-full">
      <div>
        <h1 className="font-playfair text-xl md:text-3xl font-medium">
          <span className="text-3xl md:text-5xl text-sky-500">H</span>imanshu
        </h1>
      </div>

      <button
        onClick={toggleMenu}
        className="outline-none text-gray-400 block hover:text-sky-600 sm:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <div
        ref={drawerRef}
        className={`fixed flex sm:relative top-0 right-0 sm:right-auto w-3/4 sm:w-auto h-full bg-slate-800/85 sm:bg-transparent z-40 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } sm:translate-x-0 sm:block`}
      >
        <div className="w-full p-6 sm:p-0">
          <div className="flex justify-center sm:hidden">
            <button
              onClick={closeMenu}
              className="outline-none text-gray-400 block hover:text-sky-600 mb-4 sm:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col sm:flex-row gap-5 text-base md:text-lg text-gray-200">
            {Object.entries(links).map(([anchor, label]) => (
              <li key={anchor}>
                <Link
                  to={anchor}
                  activeClass="text-sky-500 border-b-2 border-sky-500 transition duration-300 ease-in-out"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-150} /* Adjust the offset value as needed */
                  className="cursor-pointer"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Header;
