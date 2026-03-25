import { useEffect } from 'react'
import { useState } from 'react'

export default function Footer({isDark}) {
    const [showFooter, setShowFooter] = useState(false);

    useEffect (() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            // IF reached bottom Then show footer
            if (scrollTop + windowHeight >= docHeight - 10) {
                setShowFooter(true);
            } else {
                setShowFooter(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // hide footer untill reach bottom
    if (!showFooter) return null;

    return (
      <footer id='Footer'
        className={`text-white shadow-inner mt-10 ${isDark ? "darkNav" : "bg-linear-to-r from-blue-900 via-purple-900 to-black text-white"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          {/* Logo + Title */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img
              src="/images/Logo.png"
              alt="Cyber Secure India"
              className="h-10 w-10 rounded-full border-2 border-purple-400"
            />
            <span className="font-bold text-lg tracking-wide">
              Cyber Secure India
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6 font-medium mb-4 md:mb-0">
            <a href="#" className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}>
              Home
            </a>
            <a href="#" className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}>
              Security
            </a>
            <a href="#" className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}>
              Awareness
            </a>
            <a href="#" className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}>
              Resources
            </a>
            <a href="#" className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}>
              Contact
            </a>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <span className="font-semibold">Follow Us</span>
            <div className="flex space-x-4">
              <a href="#" className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}>
                GitHub
              </a>
              <a href="#" className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}>
                LinkedIn
              </a>
              <a href="#" className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}>
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-purple-400 text-center py-4 text-sm">
          © {new Date().getFullYear()} Cyber Secure India. All rights reserved.
        </div>
      </footer>
    );
}