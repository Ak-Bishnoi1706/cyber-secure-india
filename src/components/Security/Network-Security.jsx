import React from "react";

export default function NetworkSecurity({isDark}) {
  const handleAlert = (message) => alert(message);

  return (
    <section
      id="NetworkSecurity"
      className={`border-l-4 border-l-green-700 mt-6 px-6 py-6 rounded shadow-lg ${isDark ? "bg-black/80 backdrop-blur-md text-white shadow-white" : "bg-linear-to-br from-green-200 to-gray-50 shadow-black text-gray-700"}`}
    >
      <h2 className="text-2xl font-bold mb-6">🌐 Network Security</h2>
      <p
        className={`leading-relaxed mb-4 ${isDark ? "text-white" : "text-gray-700"}`}
      >
        Networks are the highways of the digital world. Your network is the
        gateway to your devices. Protecting it ensures that hackers cannot sneak
        in through Wi‑Fi or unsecured connections.
      </p>

      {/* Content */}
      <ul
        className={`border list-disc space-y-2 m-4 pl-6  rounded-lg shadow hover:ring-2  hover:shadow-md transition ${isDark ? "bg-green-900/80 hover:ring-white" : "bg-sky-200 hover:ring-gray-600"}`}
      >
        <h3
          className={` font-semibold text-xl underline ${isDark ? "text-white" : "text-green-900"}`}
        >
          Home Networks:
        </h3>

        <p className="grid md:grid-cols-3">
          <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
            Change default router credentials.
          </li>
          <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
            Use WPA3/WPA2 encryption.
          </li>
          <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
            Limit loT devices to secure segements.
          </li>
        </p>
      </ul>

      <ul
        className={`border list-disc space-y-2 m-4 pl-6  rounded-lg shadow hover:ring-2  hover:shadow-md transition ${isDark ? "bg-green-900/80 hover:ring-white" : "bg-sky-200 hover:ring-gray-600"}`}
      >
        <h3
          className={` font-semibold text-xl underline ${isDark ? "text-white" : "text-green-900"}`}
        >
          Public Wi-Fi:
        </h3>

        <p className="grid md:grid-cols-3">
          <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
            Treat open networks as unsafe.
          </li>
          <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
            Verify the network name (SSID)
          </li>
          <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
            Use VPNs for secure browing.
          </li>
        </p>
      </ul>

      <ul
        className={`border list-disc space-y-2 m-4 pl-6  rounded-lg shadow hover:ring-2  hover:shadow-md transition ${isDark ? "bg-green-900/80 hover:ring-white" : "bg-sky-200 hover:ring-gray-600"}`}
      >
        <h3
          className={` font-semibold text-xl underline ${isDark ? "text-white" : "text-green-900"}`}
        >
          Enterprise Networks:
        </h3>

        <p className="grid md:grid-cols-3">
          <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
            Firewalls and intrusion detection systems.
          </li>
          <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
            Networks segmentation to contain breaches.
          </li>
          <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
            Continous monitoring and logging.
          </li>
        </p>
      </ul>

      <ul
        className={`border list-disc space-y-2 m-4 pl-6  rounded-lg shadow hover:ring-2  hover:shadow-md transition ${isDark ? "bg-green-900/80 hover:ring-white" : "bg-sky-200 hover:ring-gray-600"}`}
      >
        <h3
          className={` font-semibold text-xl underline ${isDark ? "text-white" : "text-green-900"}`}
        >
          Future Trends:
        </h3>

        <p className="grid md:grid-cols-3">
          <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
            Zero-trust architecture.
          </li>
          <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
            AI-driven threat detection.
          </li>
          <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
            Securing 5G and loT ecosystems.
          </li>
        </p>
      </ul>

      <div
        className={`border mt-6  backdrop-blur-2xl text-black p-4 rounded-lg md:backdrop-shadow-xl hover:shadow-lg transition md:text-center md:mx-90 ${isDark ? "bg-white/60 " : "bg-blue-700/30 text-gray-900"}`}
      >
        <strong>Quick Quiz:</strong>
        <br />
        What should you do on public Wi‑Fi?
        <br />

        {/* Buttons */}
        <div className="mt-3 flex space-x-3 md:items-center md:justify-center">
          <button
            onClick={() =>
              handleAlert(
                "❌ Wrong! Public Wi‑Fi without protection is unsafe.",
              )
            }
            className="px-4 py-2 border border-gray-300 bg-red-500 text-white rounded hover:bg-red-700 hover:border-red-300 transition "
          >
            Access bank accounts directly
          </button>
          <button
            onClick={() =>
              handleAlert("✅ Correct! Use VPN for safe browsing.")
            }
            className="px-4 py-2 border border-gray-300 bg-green-600 text-white rounded hover:bg-green-800 hover:border-green-300 transition"
          >
            Use VPN before browsing
          </button>
        </div>
      </div>
      <p className="mt-6 italic">
        💡 Summary: Secure networks = secure devices.
      </p>
    </section>
  );
}
