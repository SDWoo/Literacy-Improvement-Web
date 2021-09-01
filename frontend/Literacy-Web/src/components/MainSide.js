import React, { useEffect } from "react";
import { } from "../redux";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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
}));

export default function Side() {
    useEffect(() => {
        // 렌더링
    }, []);

    const classes = useStyles();
    // 사용자에게 보여지는 부분
    return (
        <div className={classes.root}>
            <h1>test</h1>
        </div>
    );
}

