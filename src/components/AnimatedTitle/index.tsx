'use client'

import { TypeAnimation } from 'react-type-animation'

export const AnimatedTitle = () => {
  return (
    <TypeAnimation
      sequence={[
        'FULL STACK DEVELOPER',
        2000,
        'UI/UX ENTHUSIAST',
        2000,
        'PROBLEM SOLVER',
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  )
}