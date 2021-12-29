import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import "./MainWordMeaning.css";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { useSpeechRecognition } from "react-speech-kit";

export default function MainWordMeaning({ handleMorpheme, item }) {
  const [checked, setChecked] = useState(false);
  const [searchBox, setSearchBox] = useState("");

  // 음성인식
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      // 음성인식 결과가 value 상태값으로 할당됩니다.
      setSearchBox(result);
    },
  });

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
      <Button color="primary" onClick={checkMorpheme} variant="contained">
        검색
      </Button>
      <Button
        color="primary"
        variant="contained"
        onMouseDown={(e) => listen()}
        onMouseUp={stop}
      >
        🎤
      </Button>
      {listening && <div>음성인식 활성화 중</div>}
    </div>
  );
  const searchSuccess = morpheme.pos.map((item, index) => (
    <div key={index}>
      <h2 style={{ margineft: 10 }}>
        [{morpheme.pos[index]}] {morpheme.name[index]}
      </h2>
      <Link to={`/Word/${morpheme.name[index]}`}>
        <Button color="primary" variant="contained">
          더 알아보기
        </Button>
      </Link>
    </div>
  ));

  return (
    <div className="header">
      <h3 className="title"> 이건 무슨 뜻이지? </h3>
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
