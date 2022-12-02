"use client"
import "../styles/globals.css"
import Header from "./components/Header/Header"
import { AnimatePresence } from "framer-motion"

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html>
      <head />
      <body>
        <AnimatePresence>
          <Header/>
          {children}
        </AnimatePresence>
      </body>
    </html>
  )
}
