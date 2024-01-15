import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function QuestionPage() {
  const { question_id } = useParams();
  let navigate = useNavigate();
  const questionId = parseInt(question_id, 10);
  const totalQuestion = 10;

  const handleNextQuestion = () => {
    const nextQuestionId = questionId + 1;
    if (nextQuestionId <= totalQuestion) {
      navigate(`/question/${nextQuestionId}`);
    } else {
      navigate(`/result`);
    }
  };

  const handlePrevQuestion = () => {
    const prevQuestionId = questionId - 1;
    navigate(`/question/${prevQuestionId}`);
  };

  return (
    <div>
      <h1>여기는 {questionId}번째 질문 페이지입니다.</h1>
      <button onClick={handlePrevQuestion}>이전 질문</button>
      <button onClick={handleNextQuestion}>다음 질문</button>
    </div>
  );
}
