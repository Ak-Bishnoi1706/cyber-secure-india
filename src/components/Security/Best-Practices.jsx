
export default function BestPractices({isDark}) {
  const handleAlert = (message) => alert(message);

   return (
     <section
       id="BestPractices"
       className={`border-l-4 border-l-green-700 mt-6 px-6 py-6 rounded shadow-lg ${isDark ? "bg-black/80 backdrop-blur-md text-white shadow-white" : "bg-linear-to-br from-green-200 to-gray-50 shadow-black text-gray-700"}`}
     >
       <h2 className="text-2xl font-bold mb-6">🛡️ Best Practices</h2>

       <p
         className={`leading-relaxed mb-4 ${isDark ? "text-white" : "text-gray-700"}`}
       >
         Cybersecurity starts with simple habits. These practices are simple,
         but they form the foundation of digital safety.
       </p>

       <ul
         className={`border list-disc space-y-2 m-4 pl-6  rounded-lg shadow hover:ring-2  hover:shadow-md transition ${isDark ? "bg-green-900/80 hover:ring-white" : "bg-sky-200 hover:ring-gray-600"}`}
       >
         <h3
           className={` font-semibold text-xl underline ${isDark ? "text-white" : "text-green-900"}`}
         >
           Passwords & Authentication:
         </h3>
         <p className="grid md:grid-cols-2">
           <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
             Use passphrases instead of short passwords.
           </li>
           <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
            Enable 2FA wherever possible.</li>
         </p>
       </ul>

       <ul className={`border list-disc space-y-2 m-4 pl-6  rounded-lg shadow hover:ring-2  hover:shadow-md transition ${isDark ? "bg-green-900/80 hover:ring-white" : "bg-sky-200 hover:ring-gray-600"}`}>
         <h3 className={` font-semibold text-xl underline ${isDark ? "text-white" : "text-green-900"}`}>
           Software Hygiene:
         </h3>
         <p className="grid md:grid-cols-2">
           <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
             Keep systems updated to patch vulnerabilites.
           </li>
           <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
             Avoid pirated software- it often carries hidden malware.
           </li>
         </p>
       </ul>

       <ul className={`border list-disc space-y-2 m-4 pl-6  rounded-lg shadow hover:ring-2  hover:shadow-md transition ${isDark ? "bg-green-900/80 hover:ring-white" : "bg-sky-200 hover:ring-gray-600"}`}>

         <h3 className={` font-semibold text-xl underline ${isDark ? "text-white" : "text-green-900"}`}>
           Safe Browsing:
         </h3>

         <p className="grid md:grid-cols-2">
           <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
             Check for HTTPS before entering sensitive data.
           </li>
           <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
             Avoid public Wi-Fi for financial transactions.
           </li>
         </p>

       </ul>
 
       <ul className={`border list-disc space-y-2 m-4 pl-6  rounded-lg shadow hover:ring-2  hover:shadow-md transition ${isDark ? "bg-green-900/80 hover:ring-white" : "bg-sky-200 hover:ring-gray-600"}`}>
         <h3 className={` font-semibold text-xl underline ${isDark ? "text-white" : "text-green-900"}`}>
           Data Protection:
         </h3>
         <p className="grid md:grid-cols-2">
           <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
             Regular backups (cloud + offline).
           </li>
           <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>Encrypt sensitive files.</li>
         </p>
       </ul>

       <ul className={`border list-disc space-y-2 m-4 pl-6  rounded-lg shadow hover:ring-2  hover:shadow-md transition ${isDark ? "bg-green-900/80 hover:ring-white" : "bg-sky-200 hover:ring-gray-600"}`}>
         <h3 className={` font-semibold text-xl underline ${isDark ? "text-white" : "text-green-900"}`}>
           Human Awareness:
         </h3>
         <p className="grid md:grid-cols-2">
           <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
             Verify suspicious emails or calls.
           </li>
           <li className={` mx-8 ${isDark ? "text-white" : "text-gray-900"}`}>
             Train employees and family members.
           </li>
         </p>
       </ul>

       <div className={`border mt-6  backdrop-blur-2xl text-black p-4 rounded-lg md:backdrop-shadow-xl hover:shadow-lg transition md:text-center md:mx-90 ${isDark ? 'bg-white/60 ' : 'bg-blue-700/30 text-gray-900'}`} >
         <strong>Quick Quiz:</strong>
         <br />
         Which of these is a good practice?
         <br />
         <div className="mt-3 flex space-x-3 md:items-center md:justify-center">
           <button
             onClick={() =>
               handleAlert("❌ Wrong! Same password everywhere is risky.")
             }
             className="px-4 py-2 border border-gray-300 bg-red-500 text-white rounded hover:bg-red-700 hover:border-red-300 transition "
           >
             Use one password for all accounts
           </button>
           <button
             onClick={() =>
               handleAlert("✅ Correct! Unique passwords keep accounts safe.")
             }
             className="px-4 py-2 border border-gray-300 bg-green-600 text-white rounded hover:bg-green-800 hover:border-green-300 transition"
           >
             Use unique passwords for each account
           </button>
         </div>
       </div>
       <p className="mt-6 italic">
         💡 Summary: Security best practices are your first line of defense.
       </p>
     </section>
   );
}

