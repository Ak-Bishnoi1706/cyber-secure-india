import BestPractices from '@Security/Best-Practices'
import NetworkSecurity from '@Security/Network-Security'
import AccessControl from './Access-Control'

export default function Security({isDark}) {
    return (
      <main id="security" className="mt-18">
        <section>
          {/* Content */}
          <div
            className={`border-t-4 border-t-green-700 mt-6 mx-6 px-6 py-6 rounded shadow-lg ${isDark ? "bg-black/80 backdrop-blur-md text-white shadow-white" : "bg-linear-to-br from-green-300 to-gray-50 shadow-black text-gray-700"}`}
          >
            {/* Title + brief intro */}
            <h1
              className={`text-3xl font-bold mb-6 ${isDark ? "text-white" : "text-green-900"}`}
            >
              Cybersecurity: Protecting Your Digital Life
            </h1>

            <p
              className={`leading-relaxed mb-4 ${isDark ? "text-white" : "text-gray-700"}`}
            >
              Cybersecurity is the practice of defending computers, servers,
              mobile devices, and data from machines attacks. It is not limited
              to IT professionals_ every internet user plays a role in keeping
              the digital ecosystem safe. Threats like phishing, malware,
              ransomware, and identify theft are becoming more sophisticated.
              Attackers often exploit human behaviour rather than just technical
              flaws.
            </p>

            {/* Main content */}
            <ul className={`list-disc list-inside space-y-2 px-2 mb-2`}>
              <h3
                className={`text-xl font-semibold mb-2 ${isDark ? "text-green-200 underline" : "text-green-700"}`}
              >
                Why it Matters:
              </h3>
              <li>
                Protects personal identity, financial data, and organizational
                assests.
              </li>
              <li>
                Prevents disruption of essential services like banking,
                healthcare, and education.
              </li>
            </ul>
            <ul className={`list-disc list-inside space-y-2 px-2 mb-2`}>
              <h3
                className={`text-xl font-semibold mb-2 ${isDark ? "text-green-200 underline" : "text-green-700"}`}
              >
                Evolving Threats:
              </h3>
              <li>Phishing emils disguised as trusted sources.</li>
              <li>Ransomware locking critical files.</li>
              <li>Social engineering exploiting human trust.</li>
            </ul>
            <ul className={`list-disc list-inside space-y-2 px-2 `}>
              <h3
                className={`text-xl font-semibold mb-2 ${isDark ? "text-green-200 underline" : "text-green-700"}`}
              >
                Shared Responsibility:
              </h3>
              <li> Individuals -- Safe habits. </li>
              <li> Organizations -- Strong policies.</li>
              <li> Governments -- Legal frameworks.</li>
            </ul>
          </div>
          <div className="p-6 space-y-10">
            <BestPractices isDark={isDark} />
            <NetworkSecurity isDark={isDark} />
            <AccessControl isDark={isDark} />
          </div>
        </section>
      </main>
    );
}