import { Element } from "react-scroll";
import image from "../assets/images/about_image.png";

function About() {
  return (
    <Element name="about" className="pt-10 px-6 md:pt-20 md:px-12">
      <section id="about">
        <h1 className="text-4xl font-bold text-center text-sky-600">
          About Me
        </h1>
        <section className="flex justify-between items-center gap-5 mt-5">
          <div className="hidden lg:block">
            <div className="bg-sky-500 bgradius lg:w-72 xl:w-64">
              <img
                src={image}
                alt="Himanshu Devaiya"
                loading="lazy"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 text-justify">
            <p>
              Hi, I&#39;m Himanshu Devaiya, a passionate and enthusiastic
              developer currently pursuing my Master of Computer Applications
              (MCA) at Silver Oak University. I completed my Bachelor&#39;s in
              Computer Applications (BCA) at Gujarat University, where I built a
              strong foundation in programming and web development.
            </p>
            <p>
              I thrive on creating innovative solutions and exploring new
              technologies. My journey in tech has equipped me with hands-on
              experience in various programming languages and frameworks,
              including C, C++, Core Java, JavaScript, ReactJS, Node.js,
              Express.js, MongoDB, SQL, HTML, and CSS. Whether it&#39;s
              designing user-friendly interfaces or building scalable backend
              systems, I enjoy turning ideas into reality.
            </p>
            <p>
              Beyond coding, I&#39;m always eager to learn, solve problems, and
              grow as a developer. My goal is to become a skilled full-stack
              developer and contribute meaningfully to exciting and dynamic
              projects.
            </p>
            <p>
              Feel free to explore my portfolio and projects to see what
              I&#39;ve been working on!
            </p>
          </div>
        </section>
      </section>
    </Element>
  );
}

export default About;
