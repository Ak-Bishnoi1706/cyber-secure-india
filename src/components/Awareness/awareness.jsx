import React from 'react'
import UserTraining from '@Awareness/User-Training'
import DosAndDonts from '@Awareness/Dos-Donts'

export default function Awareness({isDark}) {
      return (
        <div className="p-6 space-y-10">
          <UserTraining isDark={isDark} />
          <DosAndDonts isDark={isDark} />
        </div>
      );
}