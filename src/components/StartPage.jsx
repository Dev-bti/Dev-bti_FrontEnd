import React from "react";
import { Link } from "react-router-dom";
import "../styles/start.css";

export default function StartPage() {
  return (
    <div className="start-container">
      <h1>DevBTI Main Page</h1>
      <button>
        <Link to="/question/1">테스트 시작하기</Link>
      </button>
    </div>
  );
}
