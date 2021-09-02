import React, { useEffect } from "react";
import TopBar from "../components/TopBar";
import WordDefinition from "../components/WordDefinition";
import WordExample from "../components/WordExample";
import WordSide from "../components/WordSide";
import { } from "../redux";


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
    padding: {
        paddingBottom: theme.spacing(1),
    }
}));

export default function Word() {
    useEffect(() => {
        // 렌더링
    }, []);

    const classes = useStyles();
    // 사용자에게 보여지는 부분
    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        <Grid item xs={12}>
                            <WordDefinition>
                            </WordDefinition>
                        </Grid>
                        <Grid item xs={12}>
                            <WordExample>
                            </WordExample>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <WordSide>
                        </WordSide>
                    </Grid>
                </Grid>
            </div>

        </div>
    );
}