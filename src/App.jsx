import { useEffect } from "react"

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

import { localStoragePortfolio } from "./handleDarkWhiteMode"


function App() {
  useEffect(() => localStoragePortfolio)

  return (
    <>
      <Header/>

      <Main/>

      <Footer/>
    </>
  )
}

export default App
