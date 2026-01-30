import { Atom, Apple, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex bg-white">
      {/* LEFT CONTENT */}
      <div className="w-1/2 px-20 py-16 flex flex-col justify-center">
        <div className="border-l-4 border-purple-600 pl-4 mb-4">
          <p className="text-3xl font-extrabold text-purple-500 leading-tight">
          Fontend Website Developer
          </p>
        </div>

        <h1 className="text-6xl font-extrabold text-blue-600 mb-6">
        Software Developer
        </h1>

        {/* TECH STACK ICONS */}
        <div className="flex items-center gap-6 mb-8">
          <Atom className="h-10 w-10 text-[#61DAFB]" />       {/* React */}
          <Apple className="h-10 w-10 text-black" />         {/* iOS */}
          {/* <Android className="h-10 w-10 text-green-500" />   Android */}
          <Smartphone className="h-10 w-10 text-purple-600" /> {/* Expo / Mobile */}
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

        {/* MOBILE MOCKUP */}
        <div className="absolute bottom-16 right-52">
          <img
            src="/images/mobile.png"
            alt="Mobile App"
            className="h-96"
          />
        </div>
      </div>
    </div>
  );
}
