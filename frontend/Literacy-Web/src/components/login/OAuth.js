import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import "./OAuth.css";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(5),

    // padding: theme.spacing(10),
    // width: '100%',
    // maxWidth: '30ch',
    height: "42ch",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #D9D9D9",
    borderRadius: "20px",
  },
  test: {
    // height: '50%',
    float: "right",
    // border: '1px solid #D9D9D9',
    // position: 'abolute',
    // left: '50%',
    // top: '50%',
    // transform: 'translate(-50%, -50%)',

    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  box: {
    border: "1px solid #D9D9D9",
  },
  bottom: {
    display: "inline",
    borderBottom: "1px solid #D9D9D9",
  },
}));

export default function OAuth({}) {
  useEffect(() => {
    // 렌더링
  }, []);

  const classes = useStyles();

  const CLIENT_ID = "3e67e0d19fc8b2bee3b0a7c3d5e9668d";
  const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
      <Button id="kakaoLoginButton" href={KAKAO_AUTH_URL}></Button>
    </div>
  );
}
