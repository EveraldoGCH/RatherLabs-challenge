"use client"
import styles from "./startSurveyButton.module.css"
import { useState, useReducer, useEffect } from "react"
import { appReducer, initialState } from "../../hooks/appInfo"
import { ethers } from "ethers"
import MetaMask from "../../../public/metamask-gradient.svg"
import Image from "next/image"


export default function StartSurveyButton() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  let { userAdress } = state
  let userLS = window.localStorage.getItem("UserMetaMask")
  let userLSParsed = userLS!=null?JSON.parse(userLS):""
  console.log("ESTADO", state)

  const [userBalance, setUserBalance]=useState()

  useEffect(()=>{
    if(userAdress==""){
      dispatch({ type: "UserMetaMask", payload:userLSParsed || "" })
    }
    if(window.ethereum!=undefined) {
      // window.ethereum.on('chainChanged', () => {
      // })
      window.ethereum.on('accountsChanged', () => {//on account change this code will run
        try{
          window.ethereum.request({
            method:"eth_requestAccounts"
          }).then((res:any)=>{
            dispatch({ type: "UserMetaMask", payload: res[0] })
            window.localStorage.setItem("UserMetaMask", JSON.stringify(res[0]))
          })
        }
        catch(error){
          console.log(error)
        }
        window.location.reload();//Metamask docs recommends to reload page after network/account change
      })}
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
        {userAdress!==""?
        <button className={styles.btn} onClick={()=>console.log("EMPEZAR")}>
            <p className={styles.btnConnect2}>Start survey</p>
        </button>
        :
        <button className={styles.btn} onClick={()=>connectWallet()}>
            <p className={styles.btnConnect1}>Connect to start survey</p>
            <Image src={MetaMask} alt="Metamask logo"/>
        </button>}
        {userAdress!=""?<div className={styles.adress}><p>{userAdress}</p></div>:""}
      </div>
    )
  }
  