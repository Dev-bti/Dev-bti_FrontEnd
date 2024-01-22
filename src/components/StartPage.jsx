import React from "react";
import { Link } from "react-router-dom";
import "../styles/start.css";
import "../styles/global.css";

export default function StartPage() {
  return (
    <div className="container">
      <div className="content-container start-page">
        <img src="" alt="" />
        <h1>
          나의 <span>Dev</span>-BTI
        </h1>
        <div className="text-area">
          <p>프론트엔드 / 백엔드 / 풀스택</p>
          <p>나는 어떤 개발자 유형일까?</p>
        </div>
        <button>
          <Link to="/question/1">알아보러 가기</Link>
        </button>
      </div>
    </div>
  );
}
