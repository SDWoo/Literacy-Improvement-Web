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

export default function WordExample() {
    useEffect(() => {
        // 렌더링
    }, []);

    const classes = useStyles();
    // 사용자에게 보여지는 부분
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <h3>예문</h3>
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
                <Grid item xs={12} className={classes.paper}>
                    <h5>- 저에게 오늘이 있기까지는 여러 사람의 도움이 있었습니다.</h5>
                    <h6>표준국어대사전</h6>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <h5>- 나리 댁 생신이 오늘인 것을 알고 그년이 음식을 뒤져 먹으러 들어왔다가 없으니까 감자라도 먹을 양으로….</h5>
                    <h6>{'표준국어대사전, <<김유정, 떡>>'}</h6>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <h5>- 오늘 해야 할 일을 다음 날로 미루어는 안 된다. </h5>
                    <h6>{'표준국어대사전, <<박태순, 무너지는 산>>'}</h6>
                </Grid>
            </Grid>
        </div>
    );
}