import React from 'react';

export default function AccessControl({isDark}) {
    const handleAlert = (message) => alert(message);

     return (
       <section
         id="AccessControl"
         className={`border-b-4 border-b-green-800 mt-6 px-6 py-6 rounded shadow-lg ${isDark ? "bg-black/80 backdrop-blur-md text-white shadow-white" : "bg-linear-to-br from-green-200 to-gray-50 shadow-black text-gray-700"}`}
       >

        {/* Title */}
         <h2 className="text-2xl font-bold mb-6">🔑 Access Control</h2>

        {/* Intro */}
         <p
           className={`leading-relaxed mb-4 ${isDark ? "text-white" : "text-gray-700"}`}
         >
           Access control means deciding who can enter your digital space. It
           prevents unauthorized users from stealing or misusing sensitive
           information.
         </p>

        {/* Content */}
         <ul
           className={`grid md:grid-cols-2 space-y-2 m-4 py-2 px-4 rounded-lg shadow-xl hover:shadow-md transition ${isDark ? " hover:ring-white hover:shadow-lg hover:shadow-white" : " hover:ring-gray-600"}`}
         >
           <li
             className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-white" : "text-gray-900 hover:ring-gray-600"}`}
           >
             Limit admin rights to trusted users
           </li>
           <li
             className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-white" : "text-gray-900 hover:ring-gray-600"}`}
           >
             Lock devices when not in use
           </li>
           <li
             className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-white" : "text-gray-900 hover:ring-gray-600"}`}
           >
             Use biometric authentication where possible
           </li>
           <li
             className={`border p-2 m-2 hover:ring-2 hover:shadow-md rounded-lg ${isDark ? "text-white hover:ring-white" : "text-gray-900 hover:ring-gray-600"}`}
           >
             Review and revoke unused accounts
           </li>
         </ul>

{/* Quiz container */}
         <div
           className={`border mt-6  backdrop-blur-2xl text-black p-4 rounded-lg md:backdrop-shadow-xl hover:shadow-lg transition md:text-center md:mx-90 ${isDark ? "bg-white/60 " : "bg-blue-700/30 text-gray-900"}`}
         >
           <strong>Quick Quiz:</strong>
           <br />
           Which is the safest option?
           <br />

           {/* Buttons */}
           <div className="mt-3 flex space-x-3 md:items-center md:justify-center">
             <button
               onClick={() =>
                 handleAlert("❌ Wrong! Sharing admin rights is risky.")
               }
               className="px-4 py-2 border border-gray-300 bg-red-500 text-white rounded hover:bg-red-700 hover:border-red-300 transition "
             >
               Give admin rights to everyone
             </button>

             <button
               onClick={() =>
                 handleAlert(
                   "✅ Correct! Restrict admin access to trusted users.",
                 )
               }
               className="px-4 py-2 border border-gray-300 bg-green-600 text-white rounded hover:bg-green-800 hover:border-green-300 transition"
             >
               Restrict admin access
             </button>
           </div>
         </div>

         <p className="mt-6 italic">
           💡 Summary: Control access to control security.
         </p>
       </section>
     );
}