import { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBListGroup, MDBBtn } from "mdb-react-ui-kit";
import HintModal from "./components/HintModal";
import "./App.css";
import Quiz from "./components/Quiz";
import { data, prizeMoney } from "./data";
import Timer from "./components/Timer";
import Start from "./components/Start";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton,
  TelegramIcon,
  TelegramShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";

function App() {
  const [name, setName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState("₹ 0");
  const shareUrl = window.location.href;
  const [basicModal, setBasicModal] = useState(false);
  const [hint, setHint] = useState("");
  const [show5050, setShow5050] = useState(false);
  const [usedSkip, setUsedSkip] = useState(false);
  const [used5050, setUsed5050] = useState(false);
  const [usedHint, setUsedHint] = useState(false);

  const restartClick = () => {
    window.location.reload();
  };

  useEffect(() => {
    setShow5050(false);

    if (questionNumber > 1)
      setEarned(
        prizeMoney.find((item) => item.id === questionNumber - 1).amount
      );
    else setEarned("₹ 0");
  }, [questionNumber]);

  return (
    <div className="App">
      {!name ? (
        <Start setName={setName} setTimeOut={setTimeOut} />
      ) : (
        <MDBRow className="h-full">
          <MDBCol md="9">
            <div className="main">
              {timeOut || questionNumber === data.length ? (
                <>
                  <h1 className="earned">You Earned Total: {earned}</h1>
                  {questionNumber === data.length && (
                    <span className="earned text-2xl">
                      Congratulations on answering all questions correctly!!
                    </span>
                  )}
                  <span className="text-center font-bold m-2">Share via</span>
                  <div className="flex flex-wrap justify-between mb-5">
                    <FacebookShareButton url={shareUrl}>
                      <FacebookIcon className="rounded-full ml-2" />
                    </FacebookShareButton>
                    <WhatsappShareButton url={shareUrl}>
                      <WhatsappIcon className="rounded-full " />
                    </WhatsappShareButton>
                    <TelegramShareButton url={shareUrl}>
                      <TelegramIcon className="rounded-full" />
                    </TelegramShareButton>
                    <LinkedinShareButton url={shareUrl}>
                      <LinkedinIcon className="rounded-full mr-3" />
                    </LinkedinShareButton>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ height: "50%", position: "relative" }}>
                    <div className="timer">
                      <Timer
                        setTimeOut={setTimeOut}
                        questionNumber={questionNumber}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between m-2  rounded-full bg-black/60">
                    <div
                      className={
                        " m-2 border-2 border-white p-2 font-bold rounded-full " +
                        (usedHint ? "bg-gray-600" : "bg-blue-400")
                      }
                      onClick={() => {
                        if (usedHint) return;
                        setBasicModal(true);
                        setUsedHint(true);
                      }}
                    >
                      Hint
                    </div>
                    <div
                      className={
                        " m-2 border-2 border-white p-2 rounded-full font-bold " +
                        (used5050 ? "bg-gray-600" : "bg-blue-400")
                      }
                      onClick={() => {
                        if (used5050) return;
                        setShow5050(true);
                        setUsed5050(true);
                      }}
                    >
                      50-50
                    </div>
                    <div
                      className={
                        " m-2 border-2 border-white p-2 rounded-full font-bold " +
                        (usedSkip ? "bg-gray-600" : "bg-blue-400")
                      }
                      onClick={() => {
                        if (usedSkip) return;
                        setQuestionNumber((prev) => prev + 1);
                        setUsedSkip(true);
                      }}
                    >
                      Skip
                    </div>
                  </div>
                  <div className="quit">
                    <MDBBtn
                      onClick={() => {
                        setTimeOut(true);
                        setQuestionNumber((prev) => prev - 1);
                      }}
                    >
                      Quit
                    </MDBBtn>
                  </div>
                  <div className="restart">
                    <MDBBtn onClick={restartClick}>Restart</MDBBtn>
                  </div>

                  <div style={{ height: "50%" }}>
                    <Quiz
                      show5050={show5050}
                      hint={hint}
                      setHint={setHint}
                      data={data}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                      setTimeOut={setTimeOut}
                    />
                  </div>
                </>
              )}
            </div>
          </MDBCol>
          <MDBCol
            md="3"
            className="List bg-white text-black font-black rounded-xl"
          >
            <MDBListGroup className="list-none p-2">
              <MDBRow>
                <span className="flex flex-row justify-between p-2">
                  <MDBBtn onClick={() => setTimeOut(true)}>Quit</MDBBtn>
                  <MDBBtn className="ml-2" onClick={restartClick}>
                    Restart
                  </MDBBtn>
                </span>
                <div className="bg-blue-300 text-black rounded-md flex flex-col font-serif my-2 py-2">
                  <span>Name: {name}</span>
                  <hr />
                  <span>Total Earned: {earned}</span>
                </div>
              </MDBRow>
              <hr />
              {prizeMoney.map((item, index) => (
                <li
                  key={index}
                  className={
                    questionNumber === item.id ? "item active" : "item"
                  }
                >
                  <h5 className="amount font-bold">{item.amount}</h5>
                </li>
              ))}
            </MDBListGroup>
          </MDBCol>
        </MDBRow>
      )}
      <HintModal
        basicModal={basicModal}
        setBasicModal={setBasicModal}
        hint={hint}
      />
    </div>
  );
}

export default App;
