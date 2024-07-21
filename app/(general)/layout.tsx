import { Navbar } from "@/components"
import { ReactNode } from "react"


function layout({children}:{children:ReactNode}) {
  return (
    <>
    <Navbar/>
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola Mundo</span>
        { children }
      </main>
    </>
  )
}

export default layout
