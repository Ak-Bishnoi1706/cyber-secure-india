
export default function Resources({ isDark }) {
    return (
      <main
        id="Resources"
        className={`border m-6 px-6 py-6 rounded shadow-lg ${isDark ? "bg-black/80 backdrop-blur-md text-white shadow-white" : "bg-linear-to-t from-black/30 via-purple-300 to-sky-200 "}`}
      >
        <h1 className="text-3xl font-bold mb-6">Resources</h1>

        <section
          className={`rounded-lg m-4 border p-2 shadow-xl hover:shadow transition duration ${isDark ? "hover:shadow-white bg-transparent backdrop-blur-sm" : "hover:shadow-black bg-white/30 backdrop-blur-md"} `}
        >
          <h2 className={`text-xl font-bold mb-4`}>
            📖 <u>Learning Materials</u>
          </h2>
          <p
            className={`leading-relaxed mb-4 ${isDark ? "text-white" : "text-gray-800"}`}
          >
            Cybersecurity is a fast-growing field. To stay ahead, explore these
            trusted learning resources:
          </p>

          <ul
            className={`space-y-2 py-1 rounded-lg shadow-md hover:shadow-md transition ${isDark ? " hover:ring-white" : " hover:ring-gray-600"}`}
          >
            <li
              className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-white" : "text-gray-900 hover:ring-gray-600"}`}
            >
              <a href="http://www.nist.gov/cyberframework" className={` ${isDark ? 'hover:text-green-300 '
                    : 'hover:text-blue-600'}`} target="_blank">
                Official NIST Cybersecurity Framework
              </a>
            </li>

            <li
              className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-white" : "text-gray-900 hover:ring-gray-600"}`}
            >
              <a href="http://owasp.org/Top10" className={` ${isDark ? 'hover:text-green-300 '
                    : 'hover:text-blue-600'}`} target="_blank">OWASP Top 10 Security Risks</a>
            </li>

            <li
              className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-white" : "text-gray-900 hover:ring-gray-600"}`}
            >
              <a href="https://www.coursera.org" className={` ${isDark ? 'hover:text-green-300 '
                    : 'hover:text-blue-600'}`} target="_blank">
                Cybersecurity Basics by Coursera
              </a>
            </li>
            <li
              className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-white" : "text-gray-900 hover:ring-gray-600"}`}
            >
              <a href="http://learn.microsoft.com/en-us/security/" className={` ${isDark ? 'hover:text-green-300 '
                    : 'hover:text-blue-600'}`} target="_blank">
                Microsoft Security Documentation
              </a>
            </li>
          </ul>
          <p className="mt-4 italic font-bold">
            Summary: Reliable resources = stronger knowledge.
          </p>
        </section>

        <section
          className={`rounded-lg m-4 p-2 shadow-md hover:shadow transition duration ${isDark ? "hover:shadow-white bg-transparent backdrop-blur-sm" : "hover:shadow-black bg-white/30 backdrop-blur-md"} `}
        >
          <h2 className={`text-xl font-bold mb-4`}>
            🛠 <u>Tools & Utilities</u>
          </h2>
          <p
            className={`leading-relaxed mb-4 ${isDark ? "text-white" : "text-gray-800"}`}
          >
            Practical tools help you apply security concepts in real life. Here
            are some essentials:
          </p>

          <ul
            className={`space-y-2 py-1 rounded-lg shadow-md hover:shadow-md transition ${isDark ? " hover:ring-white" : " hover:ring-gray-600"}`}
          >
            <li
              className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-white" : "text-gray-900 hover:ring-gray-600"}`}
            >
              <a href="http://www.virustotal.com" className={` ${isDark ? 'hover:text-green-300 '
                    : 'hover:text-blue-600'}`} target="_blank">
                VirusTotal - Scan suspicious files/links
              </a>
            </li>
            <li
              className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-white" : "text-gray-900 hover:ring-gray-600"}`}
            >
              <a
                href="http://www.wireshark.org"
                className={` ${isDark ? 'hover:text-green-300 '
                    : 'hover:text-blue-600'}`} target="_blank"
              >
                Wireshark - Netowrk traffic analysis
              </a>
            </li>
            <li
              className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-white" : "text-gray-900 hover:ring-gray-600"}`}
            >
              <a href="http://keepass.info" className={` ${isDark ? 'hover:text-green-300 '
                    : 'hover:text-blue-600'}`} target="_blank">KeePass - Password manager</a>
            </li>
            <li
              className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-white" : "text-gray-900 hover:ring-gray-600"}`}
            >
              <a href="http://openvpn.net" className={` ${isDark ? 'hover:text-green-300 '
                    : 'hover:text-blue-600'}`} target="_blank">
                OpenVPN - Secure remote connections
              </a>
            </li>
          </ul>
          <p className="mt-4 italic font-bold">
            Summary: Tools make secuirty practical.
          </p>
        </section>

        <section
          className={`rounded-lg m-4 p-2 shadow-md hover:shadow transition duration ${isDark ? "hover:shadow-white bg-transparent backdrop-blur-sm" : "hover:shadow-black bg-white/30 backdrop-blur-md"} `}
        >
          <h2 className={`text-xl font-bold mb-4`}>
            🤝🏻 <u>Community & Support</u>
          </h2>
          <p
            className={`leading-relaxed mb-4 ${isDark ? "text-white" : "text-gray-800"}`}
          >
            Cybersecurity is stronger when shared. Join communities to learn,
            ask questions, and stay updated:
          </p>
          <ul
            className={`space-y-2 py-1 rounded-lg shadow-md hover:shadow-md transition ${isDark ? " hover:ring-white" : " hover:ring-gray-600"}`}
          >
            <li
              className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-white" : "text-gray-900 hover:ring-gray-600"}`}>
              <a href="http://www.reddit.com/r/cybersecurity/" className={` ${isDark ? 'hover:text-green-300 '
                    : 'hover:text-blue-600'}`} target="_blank">
                Reddit r/cybersecurity
              </a>
            </li>
            <li
              className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-white" : "text-gray-900 hover:ring-gray-600"}`}>
              <a href="http://owasp.org/community/" className={` ${isDark ? 'hover:text-green-300 '
                    : 'hover:text-blue-600'}`} target="_blank">OWASP Community Forums</a>
            </li>
            <li
              className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-white" : "text-gray-900 hover:ring-gray-600"}`}>
              <a href="http://github.com/topics/security" className={` ${isDark ? 'hover:text-green-300 '
                    : 'hover:text-blue-600'}`} target="_blank">
                GitHub Security Projects
              </a>
            </li>
            <li
              className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-white" : "text-gray-900 hover:ring-gray-600"}`}>
              <a href="#" className={` ${isDark ? 'hover:text-green-300 '
                    : 'hover:text-blue-600'}`} target="_blank">Local Cybersecurity Meetups</a>
            </li>
          </ul>
          <p className="mt-4 italic font-bold">
            Summary: Community support keeps you informed and motivated.
          </p>
        </section>
      </main>
    );
}