import React, { useEffect } from "react";
import { } from "../redux";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(10),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        // width: '100%',
        // maxWidth: '100ch',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '20px',
        border: '1px solid #D9D9D9',
    },
    inline: {
        display: 'inline',
    },
    paper: {
        // padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        borderBottom: '1px solid #D9D9D9',
    },
    button: {
        float: 'right',
    }
}));

export default function WordDefinition() {
    useEffect(() => {
        // 렌더링
    }, []);

    const classes = useStyles();
    // 사용자에게 보여지는 부분
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <h3>내일</h3>
                </Grid>
                <Grid item xs={9}>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <h4>명사  </h4>
                    <h5>1. 오늘의 바로 다음 날.</h5>
                    <h5>2. 다가올 앞날</h5>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <h4>명사  </h4>
                    <h5>1. 오늘의 바로 다음 날.</h5>
                    <h5>2. 다가올 앞날</h5>
                </Grid>
            </Grid>
        </div>
    );
}