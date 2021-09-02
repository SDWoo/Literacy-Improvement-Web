import React, { useEffect, useState } from "react";
import {} from "../redux";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    // width: '100%',
    // maxWidth: '100ch',
    height: "42ch",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px",
    border: "1px solid #D9D9D9",
  },
  inline: {
    display: "inline",
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    // height: '7ch',
    color: theme.palette.text.secondary,
    display: "flex",
    borderBottom: "1px solid #D9D9D9",
  },
  button: {
    float: "right",
  },
  test: {
    border: "1px solid #D9D9D9",
  },
}));

export default function MainWordOfTheDay({ dailyWordsList }) {
  let firstPageWordsList = [];
  let secondPageWordsList = [];
  const [dailyWordPage, setDailyWordPage] = useState("1");

  useEffect(() => {
    // 렌더링
  }, []);

  const classes = useStyles();

  // 오늘의 단어 10개 5 / 5로 나눔
  function wordSplit() {
    dailyWordsList.map((word, index) =>
      index === 4
        ? firstPageWordsList.push(word)
        : secondPageWordsList.push(word)
    );
  }

  const firstPageWords = firstPageWordsList.map((word, index) => (
    <Grid item xs={12} className={classes.paper}>
      <h4>{word.word}</h4>
      <h5>{word.morpheme}</h5>
      <h4>{word.mean}</h4>
    </Grid>
  ));
  const secondPageWords = secondPageWordsList.map((word, index) => (
    <Grid item xs={12} className={classes.paper}>
      <h4>{word.word}</h4>
      <h5>{word.morpheme}</h5>
      <h4>{word.mean}</h4>
    </Grid>
  ));

  const handleNextDailyWords = (e) => {
    if (dailyWordPage === "1") {
      setDailyWordPage("2");
    } else {
      setDailyWordPage("1");
    }
    console.log(dailyWordPage);
  };

  const nextDailyWordButton = (
    <Button color="primary" onClick={handleNextDailyWords} variant="contained">
      다음 단어보기
    </Button>
  );

  const beforeDailyWordButton = (
    <Button color="primary" onClick={handleNextDailyWords} variant="contained">
      이전 단어보기
    </Button>
  );

  // 사용자에게 보여지는 부분
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <h3>오늘의 단어</h3>
        </Grid>
        <Grid item xs={7}></Grid>
        <Grid item xs={2} className={classes.button}>
          <h3 />
          <button>더 알아보기</button>
        </Grid>
        {dailyWordPage === "1" ? firstPageWords : secondPageWords}
        {dailyWordPage === "1" ? nextDailyWordButton : beforeDailyWordButton}
      </Grid>
    </div>
  );
}
