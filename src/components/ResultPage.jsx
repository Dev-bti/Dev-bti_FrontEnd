import React from "react";
import { Link } from "react-router-dom";
import "../styles/result.css";
import "../styles/global.css";

export default function ResultPage() {
  return (
    <div className="container">
      <div className="content-container result-page">
        <div className="type-area">
          <p>나의 개발자 유형은</p>
          <h2>감각적인 프론트엔드 개발자</h2>
          <img src="/assets/img/frontend.png" alt="frontend-img" />
        </div>
        <div className="personality-area">
          <div className="personality-area-top">
            <div className="border-line"></div>
            <p>
              <span>프론트엔드 개발자</span>가 어울리는 당신은?
            </p>
            <div className="border-line"></div>
          </div>
          <div className="personality-area-content">
            <ul>
              <li>당신은 이러이러한 성향이다(1)</li>
              <li>당신은 이러이러한 성향이다(2)</li>
              <li>당신은 이러이러한 성향이다(3)</li>
            </ul>
          </div>
        </div>
        <div className="role-area">
          <div className="role-area-top">
            <div className="border-line"></div>
            <p>
              프론트엔드 개발자는 <span>무슨 일</span>을 할까?
            </p>
            <div className="border-line"></div>
          </div>
          <div className="role-area-content">
            <ul>
              <li>프론트는 이러이러한 일을 한다(1)</li>
              <li>프론트는 이러이러한 일을 한다(2)</li>
              <li>프론트는 이러이러한 일을 한다(3)</li>
            </ul>
          </div>
        </div>
        <div className="language-area">
          <div className="language-area-top">
            <div className="border-line"></div>
            <p>
              <span>어떤 언어</span>를 공부해야 할까?
            </p>
            <div className="border-line"></div>
          </div>
          <div className="language-area-content">
            <div className="language-content">
              <img src="https://via.placeholder.com/110" alt="first lang" />
              <p>HTML</p>
            </div>
            <div className="language-content">
              <img src="https://via.placeholder.com/110" alt="second lang" />
              <p>CSS</p>
            </div>
            <div className="language-content">
              <img src="https://via.placeholder.com/110" alt="third lang" />
              <p>JavaScript</p>
            </div>
          </div>
        </div>
        <div className="lecture-area">
          <div className="lecture-area-top">
            <div className="border-line"></div>
            <p>
              미래 프론트엔드 개발자를 위한 <span>추천 강의</span>
            </p>
            <div className="border-line"></div>
          </div>
          <div className="lecture-area-content">
            <div className="lecture-content">
              <img
                src="https://via.placeholder.com/300x150"
                alt="first lecture"
              />
              <div className="lecture-title">강의 이름1</div>
              <button>강의 바로가기</button>
            </div>
            <div className="lecture-content">
              <img
                src="https://via.placeholder.com/300x150"
                alt="second lecture"
              />
              <div className="lecture-title">강의 이름2</div>
              <button>강의 바로가기</button>
            </div>
            <div className="lecture-content">
              <img
                src="https://via.placeholder.com/300x150"
                alt="third lecture"
              />
              <div className="lecture-title">강의 이름3</div>
              <button>강의 바로가기</button>
            </div>
          </div>
        </div>
        <div className="button-area">
          <button>
            {/* 다시하기 누르면 다시 main page로 돌아가기 */}
            <Link to="/">테스트 다시하기</Link>
          </button>
          <button>결과 공유하기</button>
        </div>
        <div className="developer-area">
          <div className="developer-area-top">
            <div className="border-line"></div>
            <p>Dev.BTI 만든 사람</p>
            <div className="border-line"></div>
          </div>
          <div className="developer-area-content">
            <div className="developer-content">
              <img src="/assets/img/jaeseung.png" alt="jaeseung" />
              <div className="developer-title">
                <p>
                  <span>백엔드</span>개발
                </p>
                <p>컴퓨터공학과 19 김재승</p>
              </div>
              <div className="developer-contact">
                <div className="contact-github">
                  <img src="/assets/img/github.png" alt="github img" />
                  <a href="https://github.com/rlawotmd" target="blank">
                    https://github.com/rlawotmd
                  </a>
                </div>
                <div className="contact-insta">
                  <img src="/assets/img/instagram.png" alt="insta img" />
                  <a
                    href="https://www.instagram.com/jaessssskkk/"
                    target="blank"
                  >
                    @jaessssskkk
                  </a>
                </div>
              </div>
            </div>
            <div className="developer-content">
              <img src="/assets/img/joohyun.png" alt="joohyun" />
              <div className="developer-title">
                <p>
                  <span>프론트엔드</span>개발
                </p>
                <p>컴퓨터공학과 20 최주현</p>
              </div>
              <div className="developer-contact">
                <div className="contact-github">
                  <img src="/assets/img/github.png" alt="github img" />
                  <a href="https://github.com/reinexxism" target="blank">
                    https://github.com/reinexxism
                  </a>
                </div>
                <div className="contact-insta">
                  <img src="/assets/img/instagram.png" alt="insta img" />
                  <a href="https://www.instagram.com/hynnnzu/" target="blank">
                    @hynnnzu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
