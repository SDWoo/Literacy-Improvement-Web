import React, { useEffect } from "react";
import {} from "../redux";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    // width: '100%',
    // maxWidth: '100ch',
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px",
    border: "1px solid #D9D9D9",
  },
  inline: {
    display: "inline",
  },
  paper: {
    // padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    display: "flex",
    borderBottom: "1px solid #D9D9D9",
  },
  button: {
    float: "right",
  },
}));

export default function WordOfTheDay({ dailyWordsList }) {
  useEffect(() => {
    // 렌더링
  }, []);

  const classes = useStyles();

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
        {dailyWordsList.map((word, index) => (
          <Grid item xs={12} className={classes.paper}>
            <h4>{word.word}</h4>
            <h5>{word.morpheme}</h5>
            <h4>{word.mean}</h4>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
