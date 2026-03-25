
export default function Emergency({isDark}) {
    const handleAlert = (message) => {
        alert(message);
    };

    return (
      <section
        id="Emergency"
        className={`border-l-4  p-6 m-6 rounded-lg shadow-lg ${isDark ? "border-red-400 bg-linear-to-tl from-red-600  to-black backdrop-blur-md " : "bg-linear-to-tl from-red-600 via-orange-600/20 to-white shadow-black border-l-red-700"}`}
      >
        {/* title */}
        <h2 className="text-2xl font-bold mb-6">🚨 Emergency Response</h2>

        {/* intro */}
        <p
          className={`leading-relaxed mb-4 ${isDark ? "text-white" : "text-gray-700"}`}
        >
          Cyber incidents can happen anytime. A quick and calm response reduces
          damage and helps restore security faster.
        </p>

        {/* Main contetn */}
        <ul
          className={`grid md:grid-cols-2 space-y-2 m-4 py-2 px-4 rounded-lg shadow hover:shadow-lg transition ${isDark ? " hover:shadow-red-200" : " hover:shadow-red-300"}`}
        >
          <li
            className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-red-300" : "border-red-700 text-gray-900 hover:ring-red-400"}`}
          >
            Disconnect affected devices from the network immediately
          </li>

          <li
            className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-red-300" : "border-red-700 text-gray-900 hover:ring-red-400"}`}
          >
            Report the incident to your IT/security team
          </li>

          <li
            className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-red-300" : "border-red-700 text-gray-900 hover:ring-red-400"}`}
          >
            Do not attempt to hide or ignore the issue
          </li>

          <li
            className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-red-300" : "border-red-700 text-gray-900 hover:ring-red-400"}`}
          >
            Preserve evidence (screenshots, logs) for investigation
          </li>

          <li
            className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-red-300" : "border-red-700 text-gray-900 hover:ring-red-400"}`}
          >
            Follow official recovery procedures
          </li>
        </ul>

        {/* Quiz container */}
        <div
          className={`border mt-6  backdrop-blur-2xl text-black p-4 rounded-lg md:backdrop-shadow-xl hover:shadow-lg transition md:text-center md:mx-90 ${isDark ? "bg-white/80 " : "bg-red-100 text-gray-900"}`}
        >
          <strong>Quick Quiz:</strong>
          <br />
          If you suspect a ransomware attack, what should you do first?
          <br />
          {/* Buttons */}
          <div className="mt-3 flex space-x-3 md:items-center md:justify-center">
            <button
              onClick={() =>
                handleAlert("❌ Wrong! Paying ransom encourages attackers.")
              }
              className="px-4 py-2 border border-gray-300 bg-red-500 text-white rounded hover:bg-red-700 hover:border-red-300 transition "
            >
              Pay the ransom
            </button>
            <button
              onClick={() =>
                handleAlert(
                  "✅ Correct! Disconnect devices and report immediately.",
                )
              }
              className="px-4 py-2 border border-gray-300 bg-green-600 text-white rounded hover:bg-green-800 hover:border-green-300 transition"
            >
              Disconnect & Report
            </button>
          </div>
        </div>

        <p className="mt-6 italic">
          💡 Summary: In emergencies, act fast, report honestly, and follow
          recovery steps.
        </p>
      </section>
    );
}