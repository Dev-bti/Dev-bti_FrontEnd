import React from "react";
import { Link } from "react-router-dom";
import "../styles/start.css";
import "../styles/global.css";

export default function StartPage() {
  return (
    <div className="container">
      <div className="content-container start-page">
        <img
          src="/assets/img/joohyun.png"
          alt="joohyun"
          className="main-img joohyun"
        />
        <img
          src="/assets/img/jaeseung.png"
          alt="jaeseung"
          className="main-img jaeseung"
        />
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
