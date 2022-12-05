"use client";
import styles from "./startSurveyButton.module.css";
import { useState, useReducer, useEffect } from "react";
import { appReducer, initialState } from "../../context/appInfo";
import { ethers } from "ethers";
import MetaMask from "../../../public/metamask-gradient.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Modal } from "antd";

export default function StartSurveyButton() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  let { userAdress, userBalance, QuizContract, ERC20_ABI } = state;
  let userLS = typeof window !== 'undefined' ?window.localStorage.getItem("UserMetaMask"):"";
  let userLSParsed:string;
  try{
    userLSParsed = userLS != null ? JSON.parse(userLS) : "";

  }
  catch(err){
    console.log(err)
  }
  let router=useRouter()

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (userAdress == "") {
      dispatch({ type: "UserMetaMask", payload: userLSParsed});
      if(userLSParsed!=""){
        connectWallet(userLSParsed)
      }
    }
    if (window.ethereum != undefined) {
      // window.ethereum.on('chainChanged', () => {
      // })
      window.ethereum.on("accountsChanged", () => {
        //on account change this code will run
        try {
          window.ethereum
            .request({
              method: "eth_requestAccounts",
            })
            .then((res: any) => {
              dispatch({ type: "UserMetaMask", payload: res[0] });
              window.localStorage.setItem(
                "UserMetaMask",
                JSON.stringify(res[0])
              );
            });
        } catch (error) {
          console.log(error);
        }
      });
    }
  }, []);

  async function reqAccount() {
    if (window?.ethereum != undefined) {
      try {
        await window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((res: any) => {
            connectWallet(res[0])
            dispatch({ type: "UserMetaMask", payload: res[0] });
            window?.localStorage.setItem("UserMetaMask", JSON.stringify(res[0]));
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("NO DETECTADO");
    }
  }

  async function connectWallet(adress:string) {
    if (window.ethereum != undefined) {
      const provider = new ethers.providers.Web3Provider(window?.ethereum);
      const contract = new ethers.Contract(QuizContract, ERC20_ABI, provider);
      let balanceQuiz = await contract.balanceOf(adress)
      balanceQuiz = ethers.utils.formatEther(balanceQuiz)
      console.log("QUIZ",balanceQuiz)
      dispatch({ type: "UserBalance", payload: balanceQuiz });
    } else {
      console.log("No hay metamask descargado");
    }
  }
 
  async function changeToGoerliNet() {
    try {
      await window?.ethereum?.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x5" }],
      }).then((res:any)=>{
        setOpenModal(false)
      })
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await window?.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x5",
                chainName: "Goerli",
                rpcUrls: ["https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"] /* ... */,
              },
            ],
          });
        } catch (addError) {
          // handle "add" error
        }
      }
    } // handle other "switch" errors
  }

  async function startSurvey() {
    if (window?.ethereum?.networkVersion != 5) {
      setOpenModal(true);
    }
    else{
      router.push("/survey")
    }
  }

  return (
    <div className={styles.buttonCont}>
      {userAdress !== "" ? (
        <button className={styles.btn} onClick={() => startSurvey()}>
          <p className={styles.btnConnect2}>Start survey</p>
        </button>
      ) : (
        <button className={styles.btn} onClick={() =>reqAccount()}>
          <p className={styles.btnConnect1}>Connect to start survey</p>
          <Image src={MetaMask} alt="Metamask logo" />
        </button>
      )}
      {userAdress != "" ? (
        <div className={styles.adress}>
          <p>{userAdress}</p>
        </div>
      ) : (
        ""
      )}
      {userBalance != "" ? (
        <div className={styles.balance}>
          <p>{userBalance} $QUIZ</p>

        </div>
      ) : (
        ""
      )}
      <Modal
        title="¿Do you want to switch to Goerli Network automatically?"
        open={openModal}
        onOk={() => changeToGoerliNet()}
        onCancel={() => setOpenModal(false)}
        okText="Yes"
        cancelText="No"
      >
        <p>If you are not in the correct network we cannot reward you</p>
      </Modal>
    </div>
  );
}
