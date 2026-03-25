

export default function UserTraning({isDark}) {
    return (
      <section
        id="UserTraining"
        className={`border-l-4 border-l-sky-400 mt-6 px-6 py-6 rounded shadow-lg ${isDark ? "bg-black/70 backdrop-blur-md text-white shadow-sky-300" : "bg-linear-to-br from-purple-200 to-gray-50 shadow-black text-gray-700"}`}
      >
        {/* title */}
        <h2 className="text-2xl font-bold mb-6">🎓 User Training</h2>

        {/* Intro */}
        <p
          className={`leading-relaxed mb-4 ${isDark ? "text-white" : "text-gray-700"}`}
        >
          Cybersecurity is not just about technology — it’s about people.
          Training users helps them recognize threats and respond correctly,
          reducing the risk of human error.
        </p>

        {/* Content */}
        <ul
          className={`grid md:grid-cols-2 space-y-2 m-4 py-2 px-4 rounded-lg shadow hover:shadow-md transition ${isDark ? " hover:shadow-sky-200" : " hover:shadow-sky-600"}`}
        >
          <li
            className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-sky-200" : "border-sky-700 text-gray-900 hover:ring-sky-400"}`}
          >
            Teach employees to identify phishing emails
          </li>

          <li
            className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-sky-200" : "border-sky-700 text-gray-900 hover:ring-sky-400"}`}
          >
            Run regular security awareness workshops
          </li>

          <li
            className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-sky-200" : "border-sky-700 text-gray-900 hover:ring-sky-400"}`}
          >
            Simulate cyber‑attack scenarios for practice
          </li>

          <li
            className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-sky-200" : "border-sky-700 text-gray-900 hover:ring-sky-400"}`}
          >
            Encourage reporting of suspicious activity
          </li>
        </ul>

        {/* Quiz Container */}
        <div
          className={`border mt-6  backdrop-blur-2xl text-black p-4 rounded-lg md:backdrop-shadow-xl hover:shadow-lg transition md:text-center md:mx-90 ${isDark ? "bg-white/60 " : "bg-blue-700/30 text-gray-900"}`}
        >
          <strong>Quick Quiz:</strong>
          <br />
          What should you do if you receive a suspicious email?
          <br />

          {/* Buttons */}
          <div className="mt-3 flex space-x-3 md:justify-center md:items-center">
            <button
              onClick={() =>
                handleAlert("❌ Wrong! Clicking could expose your data.")
              }
              className="px-4 py-2 border border-gray-300 bg-red-500 text-white rounded hover:bg-red-700 hover:border-red-300 transition "
            >
              Click the link to check
            </button>
            <button
              onClick={() =>
                handleAlert("✅ Correct! Report suspicious emails immediately.")
              }
              className="px-4 py-2 border border-gray-300 bg-green-600 text-white rounded hover:bg-green-800 hover:border-green-300 transition"
            >
              Report it to IT/security team
            </button>
          </div>
        </div>
        <p className="mt-6 italic">
          💡 Summary: Trained users are the strongest defense against cyber
          threats.
        </p>
      </section>
    );
}