import { Element } from "react-scroll";
import image from "../assets/images/profile_image.png";
import resume from "../assets/documents/resume.pdf";

function Home() {
  return (
    <Element name="home" className="pt-10 px-6 md:pt-20 md:px-12">
      <section
        id="home"
        className="flex md:flex-row flex-col justify-between items-center"
      >
        <div className="flex flex-col order-2 md:order-1 mt-10 md:mt-0">
          <div>
            <h2 className="text-xl md:text-3xl font-lato font-bold">
              Hi, I&#39;m <span className="text-sky-500">Himanshu Devaiya</span>
            </h2>
            <h3 className="text-lg md:text-2xl font-lato font-bold">
              Web Developer
            </h3>

            <p className="text-slate-300 font-lato">
              Specialized in Web Development.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={resume}
              className="text-lg font-lato font-medium py-2 px-5 rounded-full border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition duration-300 ease-in-out mt-5 w-48 flex items-center justify-center gap-2"
              download={true}
            >
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="rounded-full w-auto bg-sky-500 overflow-hidden">
            {image && (
              <img
                src={image}
                alt="Profile"
                className="w-80 sm:w-96"
                loading="lazy"
                width="384"
                height="384"
              />
            )}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Home;
