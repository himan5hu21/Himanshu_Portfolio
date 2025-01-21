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

  const [activeLink, setActiveLink] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const drawerRef = useRef();

  const handleActiveLink = (anchor) => {
    setActiveLink(anchor);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup in case the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
    <section className="sticky top-5 flex justify-between py-3 px-6 md:py-6 md:px-12 items-center shadow-md bg-slate-800/85 rounded-full z-50">
      <div>
        <h1 className="font-playfair text-xl md:text-3xl font-medium">
          <span className="text-3xl md:text-5xl text-sky-500">H</span>imanshu
        </h1>
      </div>

      <button
        onClick={toggleMenu}
        className="outline-none text-gray-400 block hover:text-sky-600 sm:hidden"
        aria-label="Open Menu"
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

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 transition-opacity duration-500"
          onClick={closeMenu} // Close menu when clicking on the overlay
        />
      )}

      <div
        ref={drawerRef}
        className={`fixed flex sm:relative top-0 right-0 sm:right-auto w-3/4 sm:w-auto h-full bg-slate-800 sm:bg-transparent z-40 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } sm:translate-x-0 sm:block`}
        style={{
          boxShadow: isOpen ? "-4px 0 10px rgba(0, 0, 0, 0.5)" : "none", // Left-side shadow
        }}
      >
        <div className="w-full p-6 sm:p-0">
          <div className="flex justify-center sm:hidden">
            <button
              onClick={closeMenu}
              className="outline-none text-gray-400 block hover:text-sky-600 mb-4 sm:hidden"
              aria-label="Close Menu"
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

          <ul className="flex flex-col sm:flex-row gap-5 text-base md:text-lg text-white">
            {Object.entries(links).map(([anchor, label]) => (
              <li key={anchor}>
                <Link
                  to={anchor}
                  href={`#${anchor}`}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-120}
                  // activeClass="text-sky-500 border-b-2 border-sky-500 transition duration-300 ease-in-out"
                  className={`cursor-pointer ${
                    activeLink === anchor &&
                    "text-sky-500 border-b-2 border-sky-500 transition duration-300 ease-in-out"
                  }`}
                  onSetActive={() => handleActiveLink(anchor)}
                  onClick={closeMenu}
                >
                  {label}
                  <span></span>
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
