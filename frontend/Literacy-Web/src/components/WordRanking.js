import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import {
    wordRankingRequest,
} from "../redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(3),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        // width: '100%',
        // maxWidth: '100ch',
        height: "42ch",
        backgroundColor: theme.palette.background.paper,
        borderRadius: "20px",
        border: "1px solid #D9D9D9",
    },
    paper: {
        // padding: theme.spacing(2),
        textAlign: "center",
        // height: '7ch',
        color: theme.palette.text.secondary,
        display: "flex",
        borderBottom: "1px solid #D9D9D9",
    },
}));

function WordRanking({
    wordRanking,
    wordRankingRequest,
}) {
    useEffect(() => {
        // 렌더링
        wordRankingRequest();
    }, []);

    console.log(wordRanking);
    const classes = useStyles();
    const onClickOneWord = (word) => {
        window.location.replace(`/Word/${word}`);
    };
    let tmp = [1]
    let wordlist = [];
    const loadData =
        tmp.map((item, index) => (
            <div key={index}>
                {
                    wordRanking[0].map((itemm, indexx) => (
                        <div key={indexx}>
                            {
                                wordlist.push(wordRanking[0][indexx])
                            }
                        </div>
                    ))
                }
            </div>
        )
        )
    console.log(wordlist)
    // let test = [["초롱", "사랑", "김정원"], [1, 2, 3]]
    // 사용자에게 보여지는 부분
    return (
        <div>
            <div className={classes.root}>
                <h3>단어랭킹</h3>
                {wordlist.map((item, index) => (
                    <Button fullWidth onClick={() => onClickOneWord(wordRanking[0][index])}>
                        <Grid item xs={12} className={classes.paper}>
                            <Grid item xs={3}>
                                <Typography variant="h6" gutterBottom color="textPrimary">
                                    {wordRanking[0][index]}
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="body2" gutterBottom color="textPrimary">
                                    {wordRanking[1][index]}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Button>
                ))}
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        wordRanking: state.ranking.status.wordRanking,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        wordRankingRequest: () => {
            return dispatch(wordRankingRequest());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(WordRanking);