import React, { useEffect, useState } from "react";
import {} from "../redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
    // height: '50%',
    float: "right",
    // border: '1px solid #D9D9D9',
    // position: 'abolute',
    // left: '50%',
    // top: '50%',
    // transform: 'translate(-50%, -50%)',

    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
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
  paraphraseResult,
  paraphraseCheckRequest,
}) {
  useEffect(() => {
    // 렌더링
  }, []);
  const classes = useStyles();

  const [userSentence, setUserSentence] = useState("");

  const handleChange = ({ target }) => {
    setUserSentence(target.value);
  };

  let exampleSentence =
    "성탄 전야 미사를 집전하며 프란치스코 교황이 전한 메시지는 '어린이를 향한 관심'입니다.";

  const toastCheckParaphrase = () => toast("같은 의미입니다!");
  const toastCheckNonParaphrase = () =>
    toast.error("다른 의미입니다. 다시 입력해 주세요.");
  const toastCheckParaphraseFailure = () => toast.error("확인 실패했습니다.");

  const checkParaphrase = (e) => {
    let body = {
      sentence1: exampleSentence,
      sentence2: userSentence,
    };

    paraphraseCheckRequest(body).then((success) => {
      if (!success) {
        toastCheckParaphraseFailure();
        return false;
      } else {
        if (paraphraseResult === "paraphrase") {
          toastCheckParaphrase();
        } else {
          toastCheckNonParaphrase();
        }
        return true;
      }
    });
  };

  // const checkResultParaphrase = <div style="color: #0A0">같은 의미입니다!</div>;
  // const checkResultNonParaphrase = (
  //   <div style="color: #0A0">다른 의미입니다. 다시 입력해 주세요.</div>
  // );
  // const checkResult =
  //   paraphraseResult === "paraphrase"
  //     ? checkResultParaphrase
  //     : checkResultNonParaphrase;

  // 사용자에게 보여지는 부분
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <h3>문장 스터디</h3>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={5}>
          <h3 />
          <button className={classes.test}>더 알아보기</button>
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
        <Button color="primary" onClick={checkParaphrase} variant="contained">
          확인하기
        </Button>
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
