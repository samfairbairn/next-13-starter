import { Metadata } from "next"

export default function About() {
  return (
    <main className="flex flex-col min-h-screen w-screen">
      <div className="flex items-center justify-center w-screen h-screen">
        <h2 className={`type-title`}>About</h2>
      </div>
      <div className="flex items-center justify-center w-screen h-screen">
        <h2 className={`type-title`}>About</h2>
      </div>
      <div className="flex items-center justify-center w-screen h-screen">
        <h2 className={`type-title`}>About</h2>
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "About",
}
