import { useEffect, useRef } from "react"
// const ModelViewer = require('@metamask/logo');
import ModelViewer from "@metamask/logo"
import { initialState } from "../../hooks/appInfo";

export function MetaMaskLogo({w,h}) {//props w and h were made because when I changed pages the metamask logo appeared
  const viewer = ModelViewer({
    pxNotRatio: true,
    width: w,
    height: h,
    followMouse: window.innerHeight>576?true:false,
    slowDrift: false,
  })
  const container = useRef(null)
  useEffect(()=>{
      container.current.appendChild(viewer.container)
  },[])
  return (
    <div ref={container}>
    </div>
  )
  
}
