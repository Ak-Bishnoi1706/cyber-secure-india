import { Typewriter } from "react-simple-typewriter"
import { Link } from "react-router-dom"

export default function Home({isDark}) {

  return (
    <main
      id="Home"
      className="min-h-screen mt-8 flex flex-col justify-center items-center py-10 px-6">


        {/* Background image */}
      <div className="rounded-full">
        <img
          src="images/Background.png"
          alt="Cyber Secure India"
          className={`w-140 h-auto drop-shadow-xl opacity-90 drop-shadow-black`}
        />
      </div>


      {/* Content */}
      <div className="text-center">
        <h1 className={`text-5xl font-extrabold drop-shadow-xl ${isDark ? 'text-white drop-shadow-black' : 'bg-clip-text text-transparent bg-linear-to-r from-[#9c27b0] to-[#1a237e] drop-shadow-gray-500'}`} >
          Cyber Secure India
        </h1>

        {/* TypeWriter effect */}
        <p className={`mt-6 text-xl font-extrabold ${isDark ? 'text-white' : 'text-purple-900'}`}>
          <Typewriter
            words={[
              "Secure your Data, Secure your Future",
              "Stay Safe, Stay Secure",
              "Learn Cyber Hygiene",
              "Be Cyber Aware",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </p>

        {/* Button */}
        <button
          className={`mt-4 inline-block px-6 py-3 rounded-lg transition-all mb-5 text-white drop-shadow-xl ${isDark ? 'drop-shadow-white bg-linear-to-b from-green-400 to-black/80 hover:bg-black hover:transition-all border-2 border-white' : ' drop-shadow-black bg-linear-to-b from-blue-900 to-sky-300 hover:bg-blue-900  '}`}
        >
          <a href='#security'>Learn More</a>
        </button>
      </div>
    </main>
  );
} 
