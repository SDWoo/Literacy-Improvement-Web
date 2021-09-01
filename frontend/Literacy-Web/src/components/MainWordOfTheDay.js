import React, { useEffect } from "react";
import { } from "../redux";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(3),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        // width: '100%',
        // maxWidth: '100ch',
        height: '42ch',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '20px',
        border: '1px solid #D9D9D9',
    },
    inline: {
        display: 'inline',
    },
    paper: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        // height: '7ch',
        color: theme.palette.text.secondary,
        display: 'flex',
        borderBottom: '1px solid #D9D9D9',
    },
    button: {
        float: 'right',
    },
    test: {
        border: '1px solid #D9D9D9',
    }
}));


export default function MainWordOfTheDay() {
    useEffect(() => {
        // 렌더링
    }, []);

    const classes = useStyles();
    // 사용자에게 보여지는 부분
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={3}>
                    <h3>오늘의 단어</h3>
                </Grid>
                <Grid item xs={7}>
                </Grid>
                <Grid item xs={2} className={classes.button}>
                    <h3 />
                    <button >
                        더 알아보기
                    </button>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <h4>내일  </h4>
                    <h5>명사</h5>
                    <h4>이건 이런뜻이고~~~~~~~~~~~~~~~</h4>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <h4>내일</h4>
                    <h5>명사</h5>
                    <h4>이건 이런뜻이고~~~~~~~~~~~~~~~</h4>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <h4>내일  </h4>
                    <h5>명사</h5>
                    <h4>이건 이런뜻이고~~~~~~~~~~~~~~~</h4>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <h4>내일  </h4>
                    <h5>명사</h5>
                    <h4>이건 이런뜻이고~~~~~~~~~~~~~~~</h4>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <h4>내일  </h4>
                    <h5>명사</h5>
                    <h4>이건 이런뜻이고~~~~~~~~~~~~~~~</h4>
                </Grid>
            </Grid>
        </div>
    );
}