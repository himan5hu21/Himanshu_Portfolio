import { Element } from "react-scroll";
import {
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

function Skills() {
  return (
    <Element name="skills" className="section-p1">
      <section id="skills">
        <h1 className="text-4xl font-bold text-center text-sky-600">Skills</h1>
        <div className="flex justify-center items-center mt-5">
          <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-5 text-6xl py-5 px-12 bg-slate-500/20 rounded-full">
            <SiC color="#A8B9CC" />
            <SiCplusplus color="#00599C" />
            <SiHtml5 color="#E34F26" />
            <SiCss3 color="#1572B6" />
            <SiJavascript color="#F7DF1E" />
            <FaJava color="#007396" />
            <TbFileTypeSql color="#4479A1" />
            <SiReact color="#61DAFB" />
            <SiNodedotjs color="#339933" />
            <SiExpress color="#000000" className="bg-white py-1 rounded" />
            <SiMongodb color="#4DB33D" />
            <SiGit color="#F05032" />
            <SiGithub color="#181717" />
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Skills;
