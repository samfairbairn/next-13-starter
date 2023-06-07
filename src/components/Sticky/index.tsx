"use client"

import { gsap } from "gsap"
import { ReactNode, useEffect, useRef } from "react"

interface ISticky {
  children?: ReactNode
  wrapperClass?: string
  className?: string
  start?: number | string
  end?: number | string
  target?: string
  id?: string
  enabled?: boolean
  pinType?: "fixed" | "transform"
}

const Sticky = ({
  children,
  wrapperClass,
  className,
  start = 0,
  end = 0,
  target,
  id = "sticky",
  enabled = true,
  pinType = "fixed",
}: ISticky) => {
  const pinSpacer = useRef<null | HTMLDivElement>(null)
  const trigger = useRef<null | HTMLDivElement>(null)
  const targetRef = useRef<null | HTMLElement>(null)

  useEffect(() => {
    if (!enabled || !pinSpacer.current || !trigger.current) return
    gsap.set(trigger.current, { clearProps: "all" })

    const timeline = gsap.timeline({
      scrollTrigger: {
        id,
        pinType,
        pinSpacing: false,
        pinSpacer: pinSpacer.current,
        trigger: trigger.current,
        scrub: true,
        pin: true,
        start: `top top+=${parseFloat(start as string)}px`,
        end: () => {
          const targetRefRect = targetRef.current?.getBoundingClientRect()
          const triggerRect = trigger.current?.getBoundingClientRect()
          return `+=${targetRefRect!.bottom - triggerRect!.bottom + parseFloat(end as string)}`
        },
        invalidateOnRefresh: true,
      },
    })

    return () => {
      timeline.kill()
    }
  }, [id, start, enabled, end, pinType])

  useEffect(() => {
    if (target) {
      targetRef.current = document.querySelector(target)
    } else {
      targetRef.current = pinSpacer.current!.parentNode as HTMLElement
    }
  }, [target])

  return (
    <div
      ref={(node) => {
        pinSpacer.current = node
      }}
      className={wrapperClass}
    >
      <div
        ref={(node) => {
          trigger.current = node
        }}
        className={className}
      >
        {children}
      </div>
    </div>
  )
}

export default Sticky
