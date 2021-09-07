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
        height: '87%',
        // maxWidth: '100ch',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #D9D9D9',
        borderRadius: '20px',
    },
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
    },
    circle: {
        width: '10px',
        height: '10px',
        background: '#FFDA8F',
        borderRadius: '50%',
        display: 'flex',
    },
    felx: {
        display: 'flex',
    },
}));

export default function WordSide() {
    useEffect(() => {
        // 렌더링
    }, []);

    const classes = useStyles();
    // 사용자에게 보여지는 부분
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <div className={classes.flex}>
                        <div className={classes.circle}></div>
                        <h3>유의어</h3>
                    </div>

                </Grid>
                <Grid item xs={9}>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <h5>- 오늘이 첫 출근 날입니다.</h5>
                    <h6>표준국어대사전</h6>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <h5>- 오늘 해야 할 일을 다음 날로 미루어는 안 된다. </h5>
                    <h6>표준국어대사전</h6>
                </Grid>
            </Grid>
        </div>
    );
}
