import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

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

export default function MySearch({ searchWordsList }) {
  useEffect(() => {
    // 렌더링
  }, []);

  const classes = useStyles();
  // 사용자에게 보여지는 부분
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography variant="h6" color="textPrimary">
            검색이력
          </Typography>
        </Grid>
        <Grid item xs={9}></Grid>
        {searchWordsList.map((word, index) => (
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
//props 내용물 설정되면 출력형식 바꿔야함
