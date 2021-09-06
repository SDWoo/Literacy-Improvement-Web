import React, { useState } from 'react';
import { Button, Divider, TextField } from "@material-ui/core";
import "./MainWordMeaning.css";
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

export default function MainWordMeaning({
  handleOneWord,
  wordStatus
}) {
  const [checked, setChecked] = useState(false);
  // const [search, setSearch] = useState(null);
  let search;
  const handleChange = (e) => {
    search = e.target.value
  }

  const searchOneWord = () => {
    handleOneWord(search);
    setChecked(true);
  }

  let wordName = [];
  let pronunciation = [];
  let pos = [];
  let sense = [];
  const itemLoad = (
    wordStatus.map((item, index) => (
      <div key={index} >
        {
          (
            wordName.push(item.word),
            pronunciation.push(item.pronunciation),
            pos.push(item.pos),
            sense.push(item.sense)
          )}
      </div>
    )
    ))

  // const itemLoad = (
  //   sense.map((item, index) => (
  //     <div key={index} >
  //       {
  //         (
  //           wordName.push(item.word),
  //         pronunciation.push(item.pronunciation),
  //         pos.push(item.pos),
  //         sense.push(item.sense)
  //         )

  //       }
  //     </div>
  //   ))
  // )
  //        console.log(sense[0][0].definition)
  const searchPage = (
    (
      <div className="inputs">
        <div> 문장 / 단어</div>
        <TextField
          className="search"
          id="filled-basic"
          label="원하는 단어나 문장을 입력해 주세요."
          onChange={handleChange}
        />
        <button
          className="search_button"
          onClick={searchOneWord}
        >
          검색
        </button>
      </div>
    )
  );;
  const searchSuccess = (
    <div>
      <h1 style={{ margineft: 10 }}>{wordName[0]}</h1>
      <Link to={`/Word/${wordName[0]}`}>
        <button

          onClick={searchOneWord}
        >
          더 알아보기
        </button>
      </Link>
    </div>
  );
  return (

    <div className="header">
      <span className="title"> 이건 무슨 뜻이지? </span>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          {searchPage}
        </Grid>
        <Grid item xs={6}>
          {!checked ? null : searchSuccess}
        </Grid>
      </Grid>

    </div>

  )
}