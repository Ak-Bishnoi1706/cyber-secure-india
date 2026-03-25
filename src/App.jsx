import { useState, useEffect } from 'react'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Home from './components/Home.jsx'
import Security from './components/Security/security.jsx'
import Awareness from './components/Awareness/awareness.jsx'
import Emergency from '@components/Emergency'
import Resources from './components/Resources.jsx'

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [isDark]);

const toggleTheme = () => setIsDark((prev) => !prev);


  return (
    <div
      className={`min-h-screen ${isDark ? "dark bg-black/40 text-white" : "bg-white/30 text-black min-h-screen"}`}
    >
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <Home isDark={isDark} />
      <Security isDark={isDark} />
      <Awareness isDark={isDark} />
      <Emergency isDark={isDark} />
      <Resources isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}

export default App
