import { Atom } from "lucide-react";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTypescript,
  SiFigma,
} from "react-icons/si";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex bg-white">
      {/* LEFT CONTENT */}
      <div className="w-1/2 px-20 py-16 flex flex-col justify-center">
        <div className="border-l-4 border-purple-600 pl-4 mb-4">
          <p className="text-3xl font-extrabold text-purple-500 leading-tight">
            Frontend Website Developer
          </p>
        </div>

        <h1 className="text-6xl font-extrabold text-blue-600 mb-6">
          Software Developer
        </h1>

        {/* TECH STACK ICONS */}
        {/* TECH STACK ICONS */}
        <div className="flex items-center gap-6 mb-8 flex-wrap">
          {/* React */}
          <Atom className="h-10 w-10 text-[#61DAFB]" />

          {/* Next.js */}
          <SiNextdotjs className="h-10 w-10 text-black" />

          {/* Tailwind CSS */}
          <SiTailwindcss className="h-10 w-10 text-[#38BDF8]" />

          {/* JavaScript */}
          <SiJavascript className="h-10 w-10 text-[#F7DF1E]" />

          <SiHtml5 className="h-10 w-10 text-[#E34F26]" />
          {/* FORCE LINE BREAK */}
          <div className="w-full" />

          {/* HTML5 */}

          {/* CSS3 */}
          <SiCss3 className="h-10 w-10 text-[#1572B6]" />

          {/* Bootstrap */}
          <SiBootstrap className="h-10 w-10 text-[#7952B3]" />

          {/* TypeScript */}
          <SiTypescript className="h-10 w-10 text-[#3178C6]" />

          {/* Figma */}
          <SiFigma className="h-10 w-10 text-[#F24E1E]" />
        </div>


        {/* BUTTON */}
        <button className="bg-[#7A5AF8] text-white px-10 py-4 rounded-full text-lg font-semibold w-fit shadow-lg mb-6">
          ORDER NOW
        </button>

        <h2 className="text-3xl font-bold text-black">
          Build Your Website
        </h2>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-1/2 relative bg-[#0F6A5F] flex items-center justify-center">
        {/* PROFILE IMAGE */}
        <div className="absolute top-20 right-24 w-72 h-72 rounded-full border-[10px] border-white overflow-hidden shadow-xl">
          <img
            src="/images/image1.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
          <div className="absolute left-80 right-0 bottom-70">
            <p className="text-white text-lg">I am Md. <span className="text-yellow-400"> Ibrahim</span> Hossain Junior Software Engineer at <span className="text-yellow-400">Somikoron IT</span> and a <span className="text-green-400">CSE Graduate</span>, passionate about building modern and efficient web applications.</p>
          </div>

        {/* MOBILE MOCKUP */}
        {/* MOBILE MOCKUP – CENTERED BETWEEN BOTH SIDES */}
        <div className="absolute  bottom-0 -translate-x-3/4">
          <img
            src="/images/react.jpg"
            alt="Mobile App"
            className="h-96"
          />
        </div>


      </div>
    </div>
  );
}
