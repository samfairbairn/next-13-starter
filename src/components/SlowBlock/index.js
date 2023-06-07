"use client"

import { cn } from "@/lib/helpers"
import { gsap } from "gsap"
import { useEffect, useRef, useState } from "react"
import { useWindowSize } from "react-use"

const SlowBlock = ({ children, className }) => {
  const ref = useRef(null)
  const { height: windowHeight } = useWindowSize()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { y: 0, scale: 1 },
      {
        y: windowHeight * 0.4,
        scale: 0.96,
        scrollTrigger: {
          onUpdate: (self) => setProgress(self.progress),
          trigger: ref.current,
          start: "top -50%", // when the top of the trigger hits the top of the viewport
          end: `+=100%`, // end after scrolling 500px beyond the start
          scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          ease: "power3.inOut",
        },
      },
    )
  }, [])
  return (
    <div
      ref={ref}
      className={cn(
        "w-full z-0 relative min-h-screen mx-auto bg-gradient-to-b from-blue-light to-purple",
        className,
      )}
      style={[]}
    >
      {children}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-0 pointer-events-none"
        style={{
          opacity: progress,
        }}
      ></div>
    </div>
  )
}

export default SlowBlock
