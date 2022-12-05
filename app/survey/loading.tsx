import Image from "next/image";
import cat from "../../public/survey/cat.gif"
export default function Loading() {
  return (
    <>
    <Image src={cat} alt="gato codeando"/>
    </>
  );
}
