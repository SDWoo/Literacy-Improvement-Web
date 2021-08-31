import React, { useEffect } from "react";
import TopBar from "./TopBar";
import WordOfTheDay from "./WordOfTheDay";
import { } from "../redux";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


export default function TestMain() {
    useEffect(() => {
        // 렌더링
    }, []);

    // 사용자에게 보여지는 부분
    return (
        <div>
            <TopBar>
            </TopBar>
            <div></div>
            <WordOfTheDay>
            </WordOfTheDay>
        </div>
    );
}