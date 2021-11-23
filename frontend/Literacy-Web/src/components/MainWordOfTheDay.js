import React, { useEffect, useState } from "react";
import {} from "../redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";

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

export default function MainWordOfTheDay({ dailyWordsList, isLoggedIn }) {
  let firstPageWordsList = [];
  let secondPageWordsList = [];
  const [dailyWordPage, setDailyWordPage] = useState("1");

  useEffect(() => {
    // 렌더링
  }, []);

  const classes = useStyles();

  // 오늘의 단어 10개 5 / 5로 나눔
  firstPageWordsList = dailyWordsList.slice(0, 5);
  secondPageWordsList = dailyWordsList.slice(5, 11);

  const onClickOneWord = (word) => {
    window.location.replace(`/Word/${word}`);
  };

  const firstPageWords = firstPageWordsList.map((word, index) => (
    <Button fullWidth onClick={() => onClickOneWord(word.word)}>
      <Grid item xs={12} className={classes.paper}>
        <Grid item xs={3}>
          <Typography variant="h6" gutterBottom color="textPrimary">
            {word.word}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle2" gutterBottom>
            {word.morpheme}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" gutterBottom color="textPrimary">
            {word.mean}
          </Typography>
        </Grid>
      </Grid>
    </Button>
  ));

  const secondPageWords = secondPageWordsList.map((word, index) => (
    <Button fullWidth onClick={() => onClickOneWord(word.word)}>
      <Grid item xs={12} className={classes.paper}>
        <Grid item xs={3}>
          <Typography variant="h6" gutterBottom color="textPrimary">
            {word.word}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle2" gutterBottom>
            {word.morpheme}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" gutterBottom color="textPrimary">
            {word.mean}
          </Typography>
        </Grid>
      </Grid>
    </Button>
  ));

  const handleNextDailyWords = (e) => {
    if (dailyWordPage === "1") {
      setDailyWordPage("2");
    } else {
      setDailyWordPage("1");
    }
    console.log(dailyWordPage);
  };

  const gotoLogin = (e) => {
    window.location.replace("/Login");
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

  const dailyWord = (
    <>
      {dailyWordPage === "1" ? firstPageWords : secondPageWords}
      {dailyWordPage === "1" ? nextDailyWordButton : beforeDailyWordButton}
    </>
  );
  const requestLogin = (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Button color="primary" onClick={gotoLogin} variant="contained">
        로그인 후 이용해 주세요.
      </Button>
    </Grid>
  );

  // 사용자에게 보여지는 부분
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <h5>오늘의 단어</h5>
        </Grid>
        {isLoggedIn ? dailyWord : requestLogin}
      </Grid>
    </div>
  );
}
