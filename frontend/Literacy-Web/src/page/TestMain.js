import React, { useEffect } from "react";
import TopBar from "../components/TopBar";
import WordOfTheDay from "../components/WordOfTheDay";
import ThemeWord from "../components/ThemeWord";
import Side from "../components/Side";
import { } from "../redux";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}));

export default function TestMain() {
    useEffect(() => {
        // 렌더링
    }, []);

    const classes = useStyles();
    // 사용자에게 보여지는 부분
    return (
        <div>
            <TopBar>
            </TopBar>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={7}>
                        <WordOfTheDay>
                        </WordOfTheDay>
                    </Grid>
                    <Grid item xs={3}>
                        <ThemeWord>
                        </ThemeWord>
                    </Grid>
                    <Grid item xs={2}>
                        <Side>
                        </Side>
                    </Grid>
                </Grid>
            </div>

        </div>
    );
}