import React, { useEffect } from "react";
import { } from "../redux";

import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router";

import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(3),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingBottom: theme.spacing(5),

        // padding: theme.spacing(10),
        // width: '100%',
        // maxWidth: '30ch',
        height: '42ch',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #D9D9D9',
        borderRadius: '20px',
    },
    test: {
        // height: '50%',
        float: 'right',
        // border: '1px solid #D9D9D9',
        // position: 'abolute',
        // left: '50%',
        // top: '50%',
        // transform: 'translate(-50%, -50%)',

        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    box: {
        border: '1px solid #D9D9D9',
    },
    bottom: {
        display: 'inline',
        borderBottom: '1px solid #D9D9D9',
    },
}));

export default function ThemeWord() {
    useEffect(() => {
        // 렌더링

        // 현재 경로가 '/'라면 Home으로 이동
        if (thisPath === "/") {
            history.push("/Home");
        }
    }, []);
    const classes = useStyles();
    const history = useHistory();
    let thisPath = history.location.pathname;

    let test = [1, 2, 3, 4, 5];
    // const handleClick = (e) => {
    //     e.
    // }

    // 사용자에게 보여지는 부분
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={5}>
                    <h3>테마 단어</h3>
                </Grid>
                <Grid item xs={2} >
                </Grid>
                <Grid item xs={5} >
                    <h3 />
                    <button className={classes.test}>
                        더 알아보기
                    </button>
                </Grid>
                {
                    test.map((item, index) => (
                        <Grid item xs={12} key={index} className={classes.bottom}>
                            <h3></h3>
                            <Button href="/Word" color="inherit" className={classes.test}>
                                더 알아보기
                            </Button>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
}
