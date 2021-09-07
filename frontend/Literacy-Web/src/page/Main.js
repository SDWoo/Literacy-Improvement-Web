import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import MainWordOfTheDay from "../components/MainWordOfTheDay";
import MainWordMeaning from "../components/WordMeaning/MainWordMeaning";
import {
  dailyWordsRequest,
  oneWordRequest,
  paraphraseCheckRequest,
} from "../redux";
import SentenceParaphrase from "../components/SentenceParaphrase";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

function Main({
  dailyWordsList,
  wordStatus,
  dailyWordsRequest,
  oneWordRequest,
  isLoggedIn,
  paraphraseCheckRequest,
  paraphraseResult,
  paraphraseCheckValid,
}) {
  useEffect(() => {
    // 렌더링
    dailyWordsRequest();
  }, []);

  const classes = useStyles();

  const handleOneWord = (word) => {
    oneWordRequest(word);
    console.log(word);
  };

  const toastCheckParaphrase = () => toast("같은 의미입니다!");
  const toastCheckNonParaphrase = () =>
    toast.error("다른 의미입니다. 다시 입력해 주세요.");
  const toastCheckParaphraseFailure = () => toast.error("확인 실패했습니다.");

  const onClickCheckParaphrase = (body) => {
    paraphraseCheckRequest(body).then(() => {
      if (paraphraseCheckValid === true) {
        if (paraphraseResult === "paraphrase") {
          toastCheckParaphrase();
        } else {
          toastCheckNonParaphrase();
        }
        return true;
      } else {
        toastCheckParaphraseFailure();
        return false;
      }
    });
  };

  // 사용자에게 보여지는 부분
  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <MainWordOfTheDay
              isLoggedIn={isLoggedIn}
              dailyWordsList={dailyWordsList}
            ></MainWordOfTheDay>
          </Grid>
          <Grid item xs={4}>
            <SentenceParaphrase
              onClickCheckParaphrase={onClickCheckParaphrase}
              paraphraseCheckValid={paraphraseCheckValid}
              paraphraseResult={paraphraseResult}
            ></SentenceParaphrase>
          </Grid>
          <Grid item xs={12}>
            <MainWordMeaning
              handleOneWord={handleOneWord}
              wordStatus={wordStatus}
            ></MainWordMeaning>
          </Grid>
        </Grid>
      </div>
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
const mapStateToProps = (state) => {
  return {
    dailyWordsList: state.dailyWords.status.dailyWordsList,
    isLoggedIn: state.authentication.status.isLoggedIn,
    paraphraseResult: state.paraphrase.status.result,
    wordStatus: state.oneWord.status.wordStatus,
    paraphraseCheckValid: state.paraphrase.status.valid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dailyWordsRequest: () => {
      return dispatch(dailyWordsRequest());
    },
    oneWordRequest: (word) => {
      return dispatch(oneWordRequest(word));
    },
    paraphraseCheckRequest: (body) => {
      return dispatch(paraphraseCheckRequest(body));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
