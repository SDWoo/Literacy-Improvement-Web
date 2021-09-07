import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { oneWordRequest, dictionaryWordsRequest } from "../redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  padding: {
    paddingBottom: theme.spacing(1),
  },
  paper: {
    borderBottom: '1px solid black',
}
}));
function Word({ wordStatus, oneWordRequest, dictionaryWordsRequest }) {
  useEffect(() => {
    oneWordRequest(keyword);
  }, []);
  const {keyword} = useParams();
  console.log(keyword)
  let wordName = [];
  let pronunciation = [];
  let pos = [];
  let sense = [];
  const itemLoad = wordStatus.map((item, index) => (
    <div key={index}>
      {
        (wordName.push(item.word),
          pronunciation.push(item.pronunciation),
          pos.push(item.pos),
          sense.push(item.sense))
      }
    </div>
  ));
  const classes = useStyles();
  const handleClickDictionary = () => {
    dictionaryWordsRequest(wordName[0]);
    console.log(wordName[0]);
  }
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
          <Grid item xs={2}>

          </Grid>
          <Grid item xs={7}>
            <button
              onClick={handleClickDictionary}
            >
              단어장에 추가
            </button>
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
                </h5>
              ))}
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    // userID: state.authentication.status.currentUser,
    wordStatus: state.oneWord.status.wordStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    oneWordRequest: (word) => {
      return dispatch(oneWordRequest(word));
    },
    dictionaryWordsRequest:(word)=>{
      return dispatch(dictionaryWordsRequest(word));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Word);
