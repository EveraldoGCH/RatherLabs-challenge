import "../styles/globals.css"
import Header from "./components/Header/Header"

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html>
      <head />
      <body>
        <Header/>
          {children}
      </body>
    </html>
  )
}
