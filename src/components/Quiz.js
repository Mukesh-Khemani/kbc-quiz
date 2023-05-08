import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

const Quiz = ({
  data,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
  setHint,
  show5050,
}) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);
  const [showCorrect, setShowCorrect] = useState(false);

  useEffect(() => {
    setShowCorrect(false);
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  useEffect(() => {
    if (question === null) return;
    setHint(question.hint);
  }, [question]);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  const delay = (duration, callBack) => {
    setTimeout(() => {
      callBack();
    }, duration);
  };

  const handleClick = (item) => {
    setSelectedAnswer(item);
    setClassName("answer active");

    delay(1000, () => {
      setShowCorrect(true);
      setClassName(item.correct ? "answer correct" : "answer wrong");
    });

    delay(1000, () => {
      if (item.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setTimeOut(true);
        });
      }
    });
  };

  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((item, index) => (
          <div
            key={index}
            className={
              "justify-center items-center flex " +
              (selectedAnswer === item ? className : "answer") +
              (item.correct && showCorrect ? " answer correct" : "")
            }
            onClick={() => !selectedAnswer && handleClick(item)}
          >
            {!show5050 ? item.text : (item.is5050 ? item.text : "")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
