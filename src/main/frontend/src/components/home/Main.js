import { Container } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/home/Home.module.css";
import Alerts from "./Alerts";
import Plan from "./Plan";

const Main = ({ acceptances, tests, open }) => {
  // const [alertH, setAlertH] = useState("-50");

  return (
    <>
      <div className={styles.homeBackground}>
        <header className={styles.header} style={{ position: "fixed" }}>
          <div className="innerheader">
            <Link to="/">
              <div className={styles.logo}>specFarm</div>
            </Link>
            <div className={styles.tailwrap}>
              <div className="loginbtn">
                <Link to="/login">로그인</Link>
              </div>
              <div className="joinbtn">
                <Link to="/join">회원가입</Link>
              </div>
            </div>
          </div>
        </header>
        <Container>
          {/* <Alerts open={open} /> */}
          <div className={styles.homeContent} style={{ position: "relative" }}>
            <div>
              <p className={styles.subTitle}>
                자격증을 취득하여,
                <br />
                여러분의 스펙Farm을 완성하세요.
              </p>
              <p className={styles.contentText}>
                혼자는 물론, 목표가 같은 동료 농부들과 함께
                <br />
                자격증 취득의 즐거움을 느낄 수 있습니다.
              </p>
            </div>
            <Plan acceptances={acceptances} tests={tests} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Main;
