import styles from "./Header.module.css"
import Image from "next/image"
import Link from "next/link"
import ratherLogo from "../../../public/r-png.png"
import github from "../../../public/github.svg"
import metamask from "../../../public/metamask.svg"
import { useContext, useEffect } from "react"
import { AppContext } from "../../context/appInfo"


export default function Header() {
  const { state }= useContext(AppContext)
  return (
    <article className={styles.headerCont}>
      <section className={styles.imgContGH}>
        <Link href={"https://github.com/EveraldoGCH/RatherLabs-challenge"} target="_blank">
          <Image src={github} alt="GitHub logo"/>
        </Link>
      </section>
      <Link href={"/"} className={styles.links}>Help</Link>
      <section className={styles.imgCont}>
          <Link href={"/"}><Image src={ratherLogo} alt="Rather Labs logo"/></Link>
      </section>
      <Link href={"/about"} className={styles.links}>About me</Link>

      
      <section className={styles.pointsCont}>
        <p className={styles.userPoints}>By: Everaldo</p>
      </section>
      
    </article>
  )
}
