
"use client";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { useRef } from "react";
import { useSectionReveal } from "../useSectionReveal";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Python", icon: SiPython },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Express.js", icon: SiExpress},
];
export default function Skills() {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, ".skills-content");
 
	return (
		<>
		<main className="relative z-10">
		<section ref={sectionRef} id="skills" className="title-section">
			<div className="title-inner mx-4 sm:mx-6 md:mx-12 mt-12 grid grid-cols-[40px_minmax(0,1fr)] sm:grid-cols-[60px_minmax(0,1fr)] gap-4 sm:gap-8 lg:gap-12 items-start">

  <div
    className="title-index font-geist-sans shrink-0"
    aria-hidden="true"
  >
    02
  </div>

  <div className="title-copy min-w-0 w-full md:mx-10 lg:mx-12 sm:mx-8">
    <span className="title-label font-geist-sans block">
      Skills
    </span>

    <p className="title-title">
      Technologies <br className="hidden sm:block" />
      that are in use.
    </p>
  </div>

</div>

   {/*Loop Banner*/}


    <div className="skills-banner mt-12 w-full overflow-hidden border-y border-white/15 py-5">
  <div className="skills-track flex w-max items-center gap-10">
    {[...skills, ...skills].map(({ name, icon: Icon }, index) => (
      <div
        key={`${name}-${index}`}
        className="flex shrink-0 items-center gap-3 text-neutral-400"
      >
        <Icon className="text-2xl shrink-0" />

        <span className="font-geist-mono text-sm whitespace-nowrap">
          {name}
        </span>
      </div>
    ))}
  </div>
            </div>
{/*-----Languages Icons-------*/}
          <div className="skills-content mt-10 grid grid-cols-1 place-items-center rounded-2xl border border-white/10 bg-white/5 p-4 md:mx-12 lg:mx-24 sm:mx-10 shadow-lg shadow-slate-500/10 backdrop-blur-xl ">
            <div className="skills-icons grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <div className="html5 flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/html5.svg" alt="html5" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7" /><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">HTML5</p></div>
              <div className="css flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/css.svg" alt="css" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">CSS</p></div>
              <div className="bootstrap flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/bootstrap.svg" alt="bootstrap" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">Bootstrap</p></div>
              <div className="tailwindcss flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/tailwindcss.svg" alt="tailwindcss" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">TailwindCSS</p></div>
              <div className="javascript flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/javascript.svg" alt="javascript" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">Javascript</p></div>
              <div className="typescript flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/typescript.svg" alt="typescript" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">Typescript</p></div>
              <div className="mongodb flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/mongodb.svg" alt="mongodb" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">MongoDB</p></div>
              <div className="nodejs flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/nodedotjs.svg" alt="nodejs" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">Node.js</p></div>
              <div className="expressjs flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/express.svg" alt="express" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">Express</p></div>
              <div className="mysql flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/mysql.svg" alt="mysql" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">MySQL</p></div>
              <div className="git flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/git.svg" alt="git" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">Git</p></div>
              <div className="python flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/python.svg" alt="python" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">Python</p></div>
              <div className="scipy flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/scipy.svg" alt="scipy" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">Scipy</p></div>
              <div className="pandas flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/pandas.svg" alt="pandas" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">Pandas</p></div>
              <div className="numpy flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/numpy.svg" alt="numpy" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">Numpy</p></div>
              <div className="nextjs flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/nextdotjs.svg" alt="nextjs" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">Next.js</p></div>
              <div className="react flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/react.svg" alt="react" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">React</p></div>
              <div className="c flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/c.svg" alt="c" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">C</p></div>
              <div className="c++ flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/cplusplus.svg" alt="cplusplus" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">C++</p></div>
              <div className="c++ flex min-w-0 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3 shadow-md shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-slate-400/20">
              <img src="/icons/angular.svg" alt="angular" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"/><p className="min-w-0 truncate font-geist-mono text-xs sm:text-sm">Angular</p></div>
              
              </div>
              </div> 

               {/*Loop Banner*/}


    <div className="skills-banner mt-32 w-full overflow-hidden border-y border-white/15 py-2">
  <div className="skills-track flex w-max items-center gap-6">
    {[...skills, ...skills].map(({ name, icon: Icon }, index) => (
      <div
        key={`${name}-${index}`}
        className="flex shrink-0 items-center gap-3 text-neutral-400"
      >
        <Icon className="text-lg shrink-0" />

        <span className="font-geist-mono text-sm whitespace-nowrap">
          {name}
        </span>
      </div>
    ))}
  </div>
            </div>
            </section>
            </main>
            </>
            
          )}