import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import "./MainWordMeaning.css";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export default function MainWordMeaning({ handleMorpheme, item }) {
  const [checked, setChecked] = useState(false);
  const [searchBox, setSearchBox] = useState("");

  const handleChange = ({ target }) => {
    setSearchBox(target.value);
  };

  const checkMorpheme = (e) => {
    handleMorpheme(searchBox);
    setChecked(true);
  };

  const morpheme = {
    pos: [],
    name: [],
  };

  const morphemeLoad = () => {
    for (let i = 0; i < item.length; i++) {
      if (i % 2 == 0) {
        morpheme.pos.push(item[i]);
      } else {
        morpheme.name.push(item[i]);
      }
    }
  };

  morphemeLoad();

  const searchPage = (
    <div className="inputs">
      <div> 문장 / 단어</div>
      <TextField
        className="search"
        id="filled-basic"
        label="원하는 단어나 문장을 입력해 주세요."
        value={searchBox}
        autoFocus
        onChange={(e) => handleChange(e)}
      />
      <button className="search_button" onClick={checkMorpheme}>
        검색
      </button>
    </div>
  );
  const searchSuccess = morpheme.pos.map((item, index) => (
    <div key={index}>
      <h1 style={{ margineft: 10 }}>
        [{morpheme.pos[index]}] {morpheme.name[index]}
      </h1>
      <Link to={`/Word/${morpheme.name[index]}`}>
        <button>더 알아보기</button>
      </Link>
    </div>
  ));
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
  );
}
