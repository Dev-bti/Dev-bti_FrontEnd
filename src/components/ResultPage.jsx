import React from "react";
import { Link } from "react-router-dom";
import "../styles/result.css";
import "../styles/global.css";

export default function ResultPage() {
  return (
    <div className="container">
      <div className="content-container result-page">
        <h1>여기는 결과 페이지입니다.</h1>
        <p>당신의 결과는?</p>
        <button>
          {/* 다시하기 누르면 다시 main page로 돌아가기 */}
          <Link to="/">테스트 다시하기</Link>
        </button>
      </div>
    </div>
  );
}
