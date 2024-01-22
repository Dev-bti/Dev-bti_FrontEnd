import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/question.css";
import "../styles/global.css";

export default function QuestionPage() {
  const [progress, setProgress] = useState(10);
  const { question_id } = useParams();
  let navigate = useNavigate();
  const questionId = parseInt(question_id, 10);
  const totalQuestion = 10;

  // move to next question
  const handleNextQuestion = () => {
    const newProgress = (progress + 10) % 110;
    setProgress(newProgress);
    const nextQuestionId = questionId + 1;
    if (nextQuestionId <= totalQuestion) {
      navigate(`/question/${nextQuestionId}`);
    } else {
      navigate(`/result`);
    }
  };

  // move to prev question
  const handlePrevQuestion = () => {
    const prevProgress = (progress - 10) % 110;
    setProgress(prevProgress);
    const prevQuestionId = questionId - 1;
    if (prevQuestionId > 0) {
      navigate(`/question/${prevQuestionId}`);
    } else {
      navigate(`/`);
    }
  };

  return (
    <div className="container">
      <div className="content-container question-page">
        <div className="progressBar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <p>
          <span>{questionId}</span>/10
        </p>
        <div className="question-area">
          자취를 시작한 친구 집에 놀러가기로 한 당신, 집들이 선물로 어떤 것을
          선물하면 좋을까요?
        </div>
        <div className="border-line"></div>
        <div className="answer-area">
          <button id="front" className="answer-button">
            1. 친구 자취방의 분위기와 어울릴만한 인테리어 소품
          </button>
          <button id="back" className="answer-button">
            2. 자취에 필요할 화장지나 수건 같은 실용적인 물건
          </button>
        </div>
        <div className="button-area">
          <button onClick={handlePrevQuestion}>이전 질문</button>
          <button onClick={handleNextQuestion}>다음 질문</button>
        </div>
      </div>
    </div>
  );
}
