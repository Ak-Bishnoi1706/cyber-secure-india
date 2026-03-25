import React from 'react'

export default function DosAndDonts({isDark}) {
    return (
      <section
        id="DosAndDonts"
        className={`border-l-4 border-l-sky-400 mt-6 px-6 py-6 rounded shadow-lg ${isDark ? "bg-black/70 backdrop-blur-md text-white shadow-sky-300" : "bg-linear-to-br from-purple-200 to-gray-50 shadow-black text-gray-700"}`}
      >
        {/* title */}
        <h2 className="text-2xl font-bold mb-6">📋 Do’s and Don’ts</h2>

        {/* intro */}
        <p
          className={`leading-relaxed mb-4 ${isDark ? "text-white" : "text-gray-700"}`}
        >
          Simple daily habits can make a huge difference in protecting your
          digital identity. Following the right practices keeps you safe from
          common attacks.
        </p>

        {/* Main Content */}
        <ul
          className={`grid md:grid-cols-2 space-y-2 m-4 py-2 px-4 rounded-lg shadow-xl  hover:shadow-md transition ${isDark ? " hover:ring-white" : " hover:ring-gray-600"}`}
        >
          <p
            className={`shadow-md rounded-lg md:m-4 ${isDark ? " hover:shadow-green-200" : " shadow-green-600"}`}
          >
            <li
              className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white border-green-300 hover:ring-green-200" : "text-gray-900 hover:ring-green-500 border-green-700"}`}
            >
              ✅ Do use strong, unique passwords
            </li>

            <li
              className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white border-green-300 hover:ring-green-200" : "text-gray-900 hover:ring-green-500 border-green-700"}`}
            >
              ✅ Do enable two‑factor authentication
            </li>

            <li
              className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white border-green-300 hover:ring-green-200" : "text-gray-900 hover:ring-green-500 border-green-700"}`}
            >
              ✅ Do update your software regularly
            </li>
          </p>

          <p
            className={`shadow-md rounded-lg md:m-4 ${isDark ? " hover:shadow-red-300" : " shadow-red-600"}`}
          >
            <li
              className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white border-red-400 hover:ring-red-300" : "text-gray-900 hover:ring-red-500 border-red-700"}`}
            >
              ❌ Don’t share passwords with anyone
            </li>

            <li
              className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white border-red-400 hover:ring-red-300" : "text-gray-900 hover:ring-red-500 border-red-700"}`}
            >
              ❌ Don’t click on unknown links
            </li>

            <li
              className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white border-red-400 hover:ring-red-300" : "text-gray-900 hover:ring-red-500 border-red-700"}`}
            >
              ❌ Don’t ignore security warnings
            </li>
          </p>
        </ul>

        {/* Quix container */}
        <div
          className={`border mt-6  backdrop-blur-2xl text-black p-4 rounded-lg md:backdrop-shadow-xl hover:shadow-lg transition md:text-center md:mx-90 ${isDark ? "bg-white/60 " : "bg-blue-700/30 text-gray-900"}`}
        >
          <strong>Quick Quiz:</strong>
          <br />
          Which of these is a DON’T?
          <br />
          {/* Buttons */}
          <div className="mt-3 flex space-x-3 md:justify-center md:items-center">
            <button
              onClick={() =>
                handleAlert("❌ Wrong! Updating software is a good practice.")
              }
              className="px-4 py-2 border border-gray-300 bg-red-500 text-white rounded hover:bg-red-700 hover:border-red-300 transition "
            >
              Update your software
            </button>
            <button
              onClick={() =>
                handleAlert("✅ Correct! Never share your passwords.")
              }
              className="px-4 py-2 border border-gray-300 bg-green-600 text-white rounded hover:bg-green-800 hover:border-green-300 transition"
            >
              Share your password with a friend
            </button>
          </div>
        </div>
        <p className="mt-6 italic">
          💡 Summary: Do’s strengthen your security, Don’ts weaken it.
        </p>
      </section>
    );
}