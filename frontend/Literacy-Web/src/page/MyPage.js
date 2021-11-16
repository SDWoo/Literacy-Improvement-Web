import React, { useEffect } from "react";
import { connect } from "react-redux";

import MySearch from "../components/MyPage/MySearch";
import MyDictionary from "../components/MyPage/MyDictionary";
import {
  dictionaryWordsRequest,
  searchWordsRequest,
  wordDeleteRequest,
} from "../redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

function MyPage({
  dictionaryWordsList,
  searchWordsList,
  dictionaryWordsRequest,
  searchWordsRequest,
  wordDeleteRequest,
}) {
  useEffect(() => {
    // 렌더링
    dictionaryWordsRequest(false);
    searchWordsRequest();
  }, []);

  const classes = useStyles();
  const handleDelete = (word) => {
    wordDeleteRequest(word);
    console.log(word);
    console.log(dictionaryWordsList);
  };
  // 사용자에게 보여지는 부분
  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MyDictionary
              dictionaryWordsList={dictionaryWordsList}
              handleDelete={handleDelete}
            ></MyDictionary>
          </Grid>
         
        </Grid>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    // userID: state.authentication.status.currentUser,
    searchWordsList: state.myPage.status.searchWordsList,
    dictionaryWordsList: state.myPage.status.dictionaryWordsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchWordsRequest: () => {
      return dispatch(searchWordsRequest());
    },
    dictionaryWordsRequest: (word) => {
      return dispatch(dictionaryWordsRequest(word));
    },
    wordDeleteRequest: (word) => {
      return dispatch(wordDeleteRequest(word));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
