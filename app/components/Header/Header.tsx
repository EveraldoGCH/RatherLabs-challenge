import styles from "./Header.module.css"
import Image from "next/image"
import Link from "next/link"
import ratherLogo from "../../../public/r-png.png"
import github from "../../../public/github.svg"
import metamask from "../../../public/metamask.svg"

export default function Header() {
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

      {false ?
      <section className={styles.pointsCont}>
          <Image src={ratherLogo} alt="Rather Labs logo" className={styles.pointsImg}/>
          <p className={styles.userPoints}>123usd</p>
      </section>
      :
      <section className={styles.pointsCont}>
        <p className={styles.userPoints}>Connect</p>
        <Image src={metamask} alt="Rather Labs logo" className={styles.pointsImgMM}/>
      </section>
      }
    </article>
  )
}
