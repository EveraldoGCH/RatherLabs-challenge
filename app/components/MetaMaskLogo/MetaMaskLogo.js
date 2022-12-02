import { useEffect, useRef } from "react"
// const ModelViewer = require('@metamask/logo');
import ModelViewer from "@metamask/logo"

export function MetaMaskLogo() {
  const viewer = ModelViewer({
    // Dictates whether width & height are px or multiplied
    pxNotRatio: true,
    width: 60,
    height: 60,
    // pxNotRatio: false,
    // width: 0.9,
    // height: 0.9,
  
    // To make the face follow the mouse.
    followMouse: window.innerHeight>576?true:false,
  
    // head should slowly drift (overrides lookAt)
    slowDrift: false,
  });

  const container = useRef(null)


    useEffect(()=>{
        container.current.appendChild(viewer.container)
    },[])


  return (
    <div ref={container}>
    </div>
  )
}
