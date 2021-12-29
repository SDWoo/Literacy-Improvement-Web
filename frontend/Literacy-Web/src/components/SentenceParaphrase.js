import React, { useEffect, useState } from "react";
import {} from "../redux";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(5),

    // padding: theme.spacing(10),
    // width: '100%',
    // maxWidth: '30ch',
    height: "42ch",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #D9D9D9",
    borderRadius: "20px",
  },
  test: {
    float: "right",
  },
  box: {
    border: "1px solid #D9D9D9",
  },
  bottom: {
    display: "inline",
    borderBottom: "1px solid #D9D9D9",
  },
}));

export default function SentenceParaphrase({
  onClickCheckParaphrase,
  paraphraseCheckValid,
  paraphraseResult,
}) {
  useEffect(() => {
    // 렌더링
  }, []);
  const classes = useStyles();

  const [userSentence, setUserSentence] = useState("");
  const paraphraseCheckResult = useSelector(
    (state) => state.paraphrase.status.result
  );

  const handleChange = ({ target }) => {
    setUserSentence(target.value);
  };

  let exampleSentence =
    "성탄 전야 미사를 집전하며 프란치스코 교황이 전한 메시지는 '어린이를 향한 관심'입니다.";

  const checkParaphrase = (e) => {
    let body = {
      sentence1: exampleSentence,
      sentence2: userSentence,
    };

    onClickCheckParaphrase(body);
  };

  if (paraphraseCheckResult === "paraphrase") {
    exampleSentence =
      "거짓을 행하는 자는 내 집 안에 거주하지 못하며 거짓말하는 자는 내 목전에 서지 못하리로다.";
  }

  // 사용자에게 보여지는 부분
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <h3>바꿔쓰기(Paraphrasing)</h3>
        </Grid>
        <h5>{exampleSentence}</h5>
        <TextField
          id="standard-textarea"
          multiline
          label="같은 뜻의 문장을 입력하세요."
          name="sentence"
          autoFocus
          fullWidth
          value={userSentence}
          onChange={handleChange}
        />
        <Grid item>
          <Button color="primary" onClick={checkParaphrase} variant="contained">
            확인하기
          </Button>
        </Grid>
      </Grid>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
      />
    </div>
  );
}
