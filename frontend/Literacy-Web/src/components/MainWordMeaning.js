import React, { useState } from 'react';
import { Button, Divider, TextField } from "@material-ui/core";
import "./MainWordMeaning.css";
import Grid from '@material-ui/core/Grid';

export default function MainWordMeaning() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="header">
      <span className="title"> 이건 무슨 뜻이지? </span>
      {/* <Divider variant="middle" /> */}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className="inputs">
            <div> 문장 / 단어</div>
            <TextField
              className="search"
              id="filled-basic"
              label="원하는 단어나 문장을 입력해 주세요."
            // onChange={(e)}
            />
            <button
              className="search_button"
            //  onClick = {setChecked(true)}
            >
              검색
            </button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="inputs">
            test
          </div>
        </Grid>
      </Grid>

    </div>
  )
}