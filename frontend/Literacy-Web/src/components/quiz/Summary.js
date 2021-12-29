import React, { Component, Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { BiTimeFive } from "react-icons/bi";
import "./_summary.scss";

export default function Suumary({}) {
  useEffect(() => {
    console.log("성공!");
    console.log(Summary);
    scoreMessage();
  });

  const Quiz = useLocation();
  let Summary = Quiz.state;
  let remark;

  const userScore = Summary.totalScore;

  const scoreMessage = () => {
    console.log();
    if (userScore <= 3) {
      remark = "좀 더 연습하세요!";
    } else if (userScore > 3 && userScore <= 5) {
      remark = "다음번엔 더 잘 할수 있을거에요!";
    } else if (userScore <= 7 && userScore > 5) {
      remark = "아쉬워요!";
    } else if (userScore > 7 && userScore <= 8) {
      remark = "잘했어요!";
    } else {
      remark = "매우 잘했어요!";
    }
  };

  return (
    <div>
      <Fragment>
        <Helmet>
          <title>퀴즈 결과</title>
        </Helmet>
        <div className="quiz-summary">
          {Summary ? (
            <Fragment>
              <div style={{ textAlign: "center" }}>
                <BiTimeFive className="success-icon" />
              </div>
              <h1>퀴즈 종료</h1>
              <div className="container stats">
                <h4>{remark}</h4>
                <h2> score: {Summary.totalScore}점</h2>
                <span className="stat left">전체 문제 수</span>
                <span className="right">{Summary.totalNumberOfQuestions}</span>
                <br />
                <span className="stat left">정답 수</span>
                <span className="right">{Summary.totalCorrectAnswers}</span>
                <br />
                <span className="stat left">오답 수</span>
                <span className="right">{Summary.totalWrongAnswers}</span>
              </div>
              <section>
                <ul>
                  <li>
                    <Link to="/Home">홈으로</Link>
                  </li>
                </ul>
              </section>
            </Fragment>
          ) : (
            <section>
              <h1 className="no-state">결과가 없습니다.</h1>
              <ul>
                <li>
                  <Link to="/Home">홈으로</Link>
                </li>
              </ul>
            </section>
          )}
        </div>
      </Fragment>
    </div>
  );
}
