import React, { useEffect } from "react";
import { } from "../redux";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(10),
        width: '100%',
        maxWidth: '70ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
    },
}));

export default function WordOfTheDay() {
    useEffect(() => {
        // 렌더링
    }, []);

    const classes = useStyles();
    // 사용자에게 보여지는 부분
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h4>내일  </h4>
                        <h5>명사</h5>
                        <h4>이건 이런뜻이고~~~~~~~~~~~~~~~</h4>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                {/* <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid> */}
            </Grid>
        </div>
        // <List className={classes.root}>

        //     <ListItem alignItems="center">
        //         <h4>
        //             Brunch this weekend?
        //         </h4>
        //         <h4>
        //             Brunch this weekend?
        //         </h4>

        //         <ListItemText
        //             primary="Brunch this weekend?"
        //             secondary={
        //                 <React.Fragment>
        //                     <Typography
        //                         component="span"
        //                         variant="body2"
        //                         className={classes.inline}
        //                         color="textPrimary"
        //                     >
        //                         내일
        //                     </Typography>
        //                     {" — I'm still hungry. you know?"}
        //                 </React.Fragment>
        //             }
        //         />
        //         <ListItemText
        //             primary="Brunch this weekend?"
        //         />
        //     </ListItem>
        //     <Divider variant="middle" component="li" />
        // </List>
    );
}