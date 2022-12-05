import { useEffect, useRef, useState } from "react"
// const ModelViewer = require('@metamask/logo');
import ModelViewer from "@metamask/logo"
import { initialState } from "../../context/appInfo";
import "../../../styles/globals.css"

export function MetaMaskLogo({}) {//props w and h were made because when I changed pages the metamask logo appeared

  const [showLogo, setShowLogo]=useState(true)

  const viewer = ModelViewer({
    pxNotRatio: true,
    width: 60,
    height: 60,
    followMouse: window.innerHeight>576?true:false,
    slowDrift: false,
  })
  const container = useRef(null)
  useEffect(()=>{
    setShowLogo(true)
      container.current.appendChild(viewer.container)
      return()=>{
        console.log("container")
        setShowLogo(false)
      }
  },[])
  return (
    <div ref={container} className={showLogo?"":"hide"}>
    </div>
  )
  
}
