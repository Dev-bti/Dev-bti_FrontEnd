import React from "react";
import { Link } from "react-router-dom";
import "../styles/result.css";

export default function ResultPage() {
  return (
    <div className="result-container">
      <h1>여기는 결과 페이지입니다.</h1>
      <p>당신의 결과는?</p>
      <button>
        <Link to="/question/1">테스트 다시하기</Link>
      </button>
    </div>
  );
}
