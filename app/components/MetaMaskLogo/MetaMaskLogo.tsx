import { useEffect, useRef } from "react"
const ModelViewer = require('@metamask/logo');

export default function MetaMaskLogo() {
  const viewer = ModelViewer({
    // Dictates whether width & height are px or multiplied
    pxNotRatio: true,
    width: 500,
    height: 400,
    // pxNotRatio: false,
    // width: 0.9,
    // height: 0.9,
  
    // To make the face follow the mouse.
    followMouse: false,
  
    // head should slowly drift (overrides lookAt)
    slowDrift: false,
  });

  const container =useRef(null)


    useEffect(()=>{

    },[])
  return (
    <div style={{position:"absolute"}} ref={container}>

    </div>
  )
}
