import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { oneWordRequest, dictionaryWordsRequest } from "../redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  padding: {
    paddingBottom: theme.spacing(1),
  },
  paper: {
    borderBottom: "1px solid black",
  },
}));
function Word({ wordStatus, oneWordRequest, dictionaryWordsRequest }) {
  useEffect(() => {
    oneWordRequest(keyword);
  }, []);
  const { keyword } = useParams();
  console.log(keyword);
  let wordName = [];
  let pronunciation = [];
  let pos = [];
  let sense = [];
  let definition = [];
  const itemLoad = wordStatus.map((item, index) => (
    <div key={index}>
      {
        (wordName.push(item.word),
        pronunciation.push(item.pronunciation),
        pos.push(item.pos),
        sense.push(item.sense),
        definition.push(item.sense[0].definition))
      }
    </div>
  ));
  const classes = useStyles();
  const handleClickDictionary = () => {
    dictionaryWordsRequest(wordName[0], definition[0]).then(() => {
      toastAddToNoteSuccess();
    });
  };

  const toastAddToNoteSuccess = () => toast("단어장에 추가되었습니다!");

  // 사용자에게 보여지는 부분
  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <h3>
              {wordName[0]} [{pronunciation[0]}]
            </h3>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={7}>
            <Button
              color="primary"
              variant="contained"
              onClick={handleClickDictionary}
            >
              나만의 단어장에 추가
            </Button>
          </Grid>
          {wordName.map((word, index) => (
            <Grid item key={index} xs={12} className={classes.paper}>
              <h4>
                {wordName[index]}[{pronunciation[index]}]
              </h4>
              <h4>{pos[index]}</h4>
              {sense[index].map((item, i) => (
                <h5>
                  {i + 1}.{item.definition}
                  {console.log(definition[i])}
                </h5>
              ))}
            </Grid>
          ))}
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
    wordStatus: state.oneWord.status.wordStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    oneWordRequest: (word) => {
      return dispatch(oneWordRequest(word));
    },
    dictionaryWordsRequest: (word, definition) => {
      return dispatch(dictionaryWordsRequest(word, definition));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Word);
