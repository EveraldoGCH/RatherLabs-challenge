"use client"

import styles from "./startSurveyButton.module.css"
import Image from "next/image"
import metamask from "../../../public/metamask-gradient.svg"
import { useState } from "react"
import { ethers } from "ethers"
import MetaMaskLogo from "../MetaMaskLogo/MetaMaskLogo"

export default function StartSurveyButton() {

  const [walletAdress, setWalletAdress]=useState("")

  async function reqAccount() {
    if(window.ethereum!=undefined){
      try{
        const account= await window.ethereum.request({
          method:"eth_requestAccounts"
        })
        
  
        console.log(account)
        console.log(window.ethereum)
        setWalletAdress(account[0])
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
      console.log(provider)
    }
    else{
      console.log("No hay metamask descargado")
    }
  }

    return (
      <div className={styles.buttonCont}>
        <button className={styles.btn} onClick={()=>connectWallet()}>
            <p className={styles.btnConnect}>Connect to start survey</p>
            <Image src={metamask} alt="Metamask logo" className={styles.metamaskLogo}/>
        </button>

        <MetaMaskLogo/>
      </div>
    )
  }
  