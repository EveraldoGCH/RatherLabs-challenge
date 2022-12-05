"use client";
import { Modal, Button, Checkbox } from "antd";
import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/appInfo";
import eth from "../../public/eth.png";

export default function Survey() {
  const { state } = useContext(AppContext);
  const { surveyQuestions } = state;

  const [show, setShow] = useState(false);
  const [page, setPage] = useState<number>(0);
  const [title, setTitle] = useState<string>();
  const [optionsObj, setOptionsObj]=useState([])
  const [start, setStart]=useState(false)
  const [modal1, setModal1] = useState(true);
  const [modal2, setModal2] = useState(true);
  const [modal3, setModal3] = useState(true);
  const [modal4, setModal4] = useState(true);

  useEffect(() => {
    //Hydration problem with react 18 or superior
    setShow(true);
  }, []);

  useEffect(()=>{
    console.log("cambio la pagina")

  },[page])

  function handleClose() {
    window.location.href = "/";
  }


//   function handleNext(e:any) {
//     console.log("NEXT")
//     console.log("QUE pagina",page)
//     if(start){
//         setTimeout(()=>{
//             setModal1(false)
//             setPage(page+1)
//             setTimeout(() => {
//                 setModal1(true);
//                 console.log("PAGINA", page);
//                 console.log("PRESGUNTAS", state.surveyQuestions.questions);
//                 setTitle(surveyQuestions.questions[page].text);
//               }, 1000);
//         },surveyQuestions.questions[page].lifetimeSeconds * 1000 )
//         console.log("SEGUNDOS QUE SE QUEDA", surveyQuestions.questions[page].lifetimeSeconds)
//     }
//     setPage(page + 1);
//     setModal1(false);
//     setTimeout(() => {
//       setModal1(true);
//       console.log("PAGINA", page);
//       console.log("PRESGUNTAS", state.surveyQuestions.questions);
//       setTitle(surveyQuestions.questions[page].text);
//     }, 700);
//   }


  function handleStart(){
    console.log("PAGE INIT", page)
    setStart(true)
    setModal1(false)
    setTimeout(() => {
        handleNext2()
      }, 300);
  }

  function handleNext2(){
    let count=0
    console.log("VERR START?", start)
        surveyQuestions.questions.map((question:any, i:number)=>{
            count += question.lifetimeSeconds*1000
            if(i==0){
                setTitle(question.text)
                setOptionsObj(question.options)
                setModal1(true)
                count=200
            }
            if(surveyQuestions.questions.length>=i){
            setTimeout(()=>{
                setTimeout(()=>{
                    setModal1(true)
                }, 200)//Animation of close and open new one
                setModal1(false)
                setTitle(question.text)
                setOptionsObj(question.options)
            }, count)}
            setModal1(false)            
        })
  }

  return (
    <>
      {show ? (
        <Modal
          open={modal1}
          title={!start ? surveyQuestions.title : title}
          footer={
            !start ? 
                [
                  <Button key="back" onClick={() => handleClose()} disabled>
                    Go back
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    onClick={(e) => handleStart()}
                  >
                    Start
                  </Button>,
                  <Button
                    key="link"
                    href="https://google.com"
                    type="primary"
                    onClick={() => handleClose()}
                  >
                    Go Back
                  </Button>,
                ]
              : [
                  
                  <Button
                    key="submit"
                    type="primary"
                    onClick={handleNext2}
                  >
                    Submit
                  </Button>,
                ]
          }
        >
          {!start ? (
            <div>
              <Image src={eth} width={60} height={60} alt="Survey image" />
              <p>Some contents...</p>
            </div>
          ) : (
            optionsObj.map((opt:any) => {
              return (
                <Checkbox
                  onChange={(e: any) => console.log(e.target.value)}
                  name={surveyQuestions.questions[page].text}
                  value={opt.text}
                  key={page}
                >
                  {opt.text}
                </Checkbox>
              );
            })
          )}
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}
