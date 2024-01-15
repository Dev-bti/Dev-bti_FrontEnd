import React from "react";
import { Link } from "react-router-dom";

export default function StartPage() {
  return (
    <div>
      <h1>DevBTI Main Page</h1>
      <button>
        <Link to="/question/1">테스트 시작하기</Link>
      </button>
    </div>
  );
}
