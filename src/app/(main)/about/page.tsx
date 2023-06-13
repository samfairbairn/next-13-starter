import { Link } from "@/components"
import { Metadata } from "next"

export default function About() {
  return (
    <main className="flex flex-col min-h-screen w-screen">
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="flex items-center justify-center w-screen max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-blue to-purple">
          <video preload="metadata" autoPlay muted playsInline loop>
            {/* <source src="/videos/movie-mp4.mp4" type={'video/mp4; codecs="hvc1"'} /> */}
            <source src="/videos/movie-mov.mov" type='video/quicktime; codecs="hvc1"' />
            <source src="/videos/movie-webm.webm" type="video/webm" />
          </video>
        </div>
      </div>

      <div className="flex items-center justify-center w-screen h-screen">
        <Link href="/about/#scrollTarget">Scroll to section</Link>
      </div>
      <div className="flex items-center justify-center w-screen h-screen">
        <h2 className={`type-title`}>About</h2>
      </div>
      <div className="flex items-center justify-center w-screen h-screen">
        <h2 className={`type-title`}>About</h2>
      </div>
      <div className="flex items-center justify-center w-screen h-screen">
        <h2 className={`type-title`}>About</h2>
      </div>
      <div id="scrollTarget" className="flex items-center justify-center w-screen h-screen">
        <h2 className={`type-title`}>Scroll Here</h2>
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "About",
}
