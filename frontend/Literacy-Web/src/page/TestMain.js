import React, { useEffect } from "react";
import TopBar from "../components/TopBar";
import MainWordOfTheDay from "../components/MainWordOfTheDay";
import MainThemeWord from "../components/MainThemeWord";
import MainSide from "../components/MainSide";
import MainWordMeaning from "../components/MainWordMeaning";
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
                    <Grid item xs={8}>
                        <MainWordOfTheDay>
                        </MainWordOfTheDay>
                    </Grid>
                    <Grid item xs={4} >
                        <MainThemeWord>
                        </MainThemeWord>
                    </Grid>
                    <Grid item xs={12}>
                        <MainWordMeaning>
                        </MainWordMeaning>
                    </Grid>
                </Grid>
            </div>

        </div>
    );
}