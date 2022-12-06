"use client";
import { Modal, Button, Checkbox } from "antd";
import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/appInfo";
import eth from "../../public/eth.png";
import cat from "../../public/survey/cat.gif";
import { Answers } from "../../types";

export default function Survey() {
  const { state } = useContext(AppContext);
  const { surveyQuestions } = state;
  let { questions } = surveyQuestions;
  let numberOfQuestions = surveyQuestions.questions.length;

  const [show, setShow] = useState(false);
  const [firstModal, setFirstModal] = useState(true);
  const [secondModal, setSecondModal] = useState(false);
  const [finalModal, setFinalModal] = useState(false);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [answers, setAnswers]=useState<Array<Answers>>([])

  useEffect(() => {
    //Hydration problem with react 18 or superior
    setShow(true);
  }, []);

  function handleChange(e:any){
    console.log("LLEGO",e.target.value)
    setAnswers([...answers, {question:questions[indexQuestion].text, answer:e.target.value}])
  }

  function handleClose() {
    window.location.href = "/"; //Not recommended in React to use but I dont have react-rouer-dom installed
  }

  function handleFirstModal() {
    setFirstModal(!firstModal);

    setTimeout(() => {
      setSecondModal(true);
    }, 100);
  }
  function handleNext() {
    if (indexQuestion < numberOfQuestions - 1) {
      setIndexQuestion(indexQuestion + 1);
    } else {
      console.log("RESPUESTAS",answers)
      setSecondModal(false);
      setFinalModal(true);
    }
  }

  return (
    <>
      {show ? (
        <>
          <Modal
            open={firstModal}
            title={surveyQuestions.title}
            footer={[
              <Button key="back" onClick={() => handleClose()}>
                Go back
              </Button>,
              <Button
                key="submit"
                type="primary"
                onClick={(e) => handleFirstModal()}
              >
                Start
              </Button>,
            ]}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={eth} width={60} height={60} alt="Survey image" />
              <p>Please answer our survey</p>
            </div>
          </Modal>

          <Modal
            open={secondModal}
            title={questions[indexQuestion].text}
            footer={[
              <Button key="submit" type="primary" onClick={(e) => handleNext()}>
                Submit
              </Button>,
            ]}
          >
            {questions[indexQuestion].options.map((opt: any, i: number) => {
              return (
                <Checkbox
                  onChange={(e: any) => handleChange(e)}
                  name={opt.text}
                  value={opt.text}
                  key={indexQuestion + i}
                >
                  {opt.text}
                </Checkbox>
              );
            })}
          </Modal>

          <Modal
            open={finalModal}
            title={"With your help we will grow the crytpo world!"}
            footer={[
              <Button key="back" onClick={() => handleClose()}>
                Send
              </Button>,
              <Button
                key="submit"
                type="primary"
                onClick={() => (window.location.href = "/about")} //Not recommended in React to use but I dont have react-rouer-dom installed
              >
                More about me
              </Button>,
            ]}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={cat} width={90} height={80} alt="Survey image" />
              <div>
                  <p>Thank you! Your answers below:</p>
                  {answers.map((answr)=>{
                    return <p key={answr.question}>Question: {answr.question} Response: {answr.answer}</p>
                  })}
              </div>
            </div>
          </Modal>
        </>
      ) : (
        ""
      )}
    </>
  );
}
