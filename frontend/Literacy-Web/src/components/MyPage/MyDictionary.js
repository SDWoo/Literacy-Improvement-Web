import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
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
    //padding: theme.spacing(2),
    textAlign: "center",
    // height: '7ch',
    color: theme.palette.text.secondary,
    display: "inline-block",
    borderBottom: "1px solid #D9D9D9",
    width: "40%"
  },
  button: {
    float: "left",
    border: "none",
    backgroundColor: "white",
    borderRadius: "5px",
    width: "150px",
    height: "2.5rem",
    fontSize: "1.5rem",
    fontWeight: "400",
    textAlign: "left",
  },
  deletebutton: {
    float: "right",
    border: "none",
    width: "3rem",
    height: "2rem",
    borderRadius: "5px",
    color: "white",
    fontSize: "0.85rem",
    fontWeight: "400",

    backgroundColor: "#ff575d",
  },
  test: {
    border: "1px solid #D9D9D9",
  },
}));

export default function MyDictionary({ dictionaryWordsList, handleDelete }) {
  useEffect(() => {
    // 렌더링
  }, []);

  let wordName = [];
  let wordForDelete = "";
  const itemLoad = dictionaryWordsList.map((item, index) => (
    <div key={index}>{wordName.push(item)}</div>
  ));
  const classes = useStyles();

  const wordDelete = (word) => {
    handleDelete(word);
  };

  console.log(wordName);

  const myWordList = wordName.map((word, index) => (
    <Grid item key={index} xs={12} className={classes.paper}>
      <Link to={`/Word/${wordName[index]}`}>
        <button className={classes.button}>{wordName[index]}</button>
      </Link>
      <button
        className={classes.deletebutton}
        onClick={() => wordDelete(wordName[index])}
      >
        삭제
      </button>
    </Grid>
  ));
  // 사용자에게 보여지는 부분
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <h3>
            내 단어장
          </h3>
        </Grid>
        {myWordList}
      </Grid>
    </div>
  );
}
//props 내용물 설정되면 출력형식 바꿔야함
