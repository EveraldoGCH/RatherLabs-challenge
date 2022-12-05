"use client"
import "../styles/globals.css"
import Header from "./components/Header/Header"
import { ContextProvider } from "./context/ContextProvider"


export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html>
      <head />
      <body>
        <ContextProvider>
          <Header/>
          { children }
        </ContextProvider>
      </body>
    </html>
  )
}
