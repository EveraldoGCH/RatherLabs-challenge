"use client"


import styles from "./startSurveyButton.module.css"
import Image from "next/image"
import metamask from "../../../public/metamask-gradient.svg"
import { useState, useReducer, useEffect } from "react"
import { appReducer, initialState } from "../../hooks/appInfo"
import { ethers } from "ethers"
import { MetaMaskLogo } from "../MetaMaskLogo/MetaMaskLogo"


export default function StartSurveyButton() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  let { userAdress } = state
  let userLS = window.localStorage.getItem("UserMetaMask")
  console.log("ESTADO", state)
  const [user, setUser]=useState(userLS || "")
  const [userBalance, setUserBalance]=useState()

  useEffect(()=>{
    dispatch({ type: "UserMetaMask", payload:userLS || "" })
  },[])

  async function reqAccount() {
    if(window.ethereum!=undefined){
      try{
        await window.ethereum.request({
          method:"eth_requestAccounts"
        }).then((res:any)=>{
          dispatch({ type: "UserMetaMask", payload: res[0] })
          window.localStorage.setItem("UserMetaMask", JSON.stringify(res[0]))
        })
      }
      catch(error){
        console.log(error)
      }
    }
    else{
      console.log("NO DETECTADO")
    }
  }

  async function connectWallet(){
    if(window.ethereum!=undefined){
      await reqAccount()
      const provider= new ethers.providers.Web3Provider(window.ethereum)
      console.log("provider", provider)
    }
    else{
      console.log("No hay metamask descargado")
    }
  }

    return (
      <div className={styles.buttonCont}>
        {userAdress!=""?
        <button className={styles.btn} onClick={()=>console.log("EMPEZAR")}>
            <p className={styles.btnConnect}>Start survey</p>
        </button>
        :
        <button className={styles.btn} onClick={()=>connectWallet()}>
            <p className={styles.btnConnect}>Connect to start survey</p>
            <MetaMaskLogo/>
        </button>}
        {userAdress!=""?<div className={styles.adress}><p>{userAdress}</p></div>:""}
      </div>
    )
  }
  