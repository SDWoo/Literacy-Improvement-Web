// 리다이렉트될 화면
// OAuthRedirectHandeler.js

import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { kakaoAuthRequest } from "../../redux";

//import Spinner from "./Spinner";

function OAuthRedirectHandler({ kakaoAuthRequest }) {
  const dispatch = useDispatch();

  useEffect(async () => {
    await kakaoAuthRequest(code);
  });

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  return <div>hello kakao</div>;
}

const mapStateToProps = (state) => {
  return {
    //AUTHORIZE_CODE: state.kakaoAuth.status.AUTHORIZE_CODE,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    kakaoAuthRequest: (code) => {
      return dispatch(kakaoAuthRequest(code));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OAuthRedirectHandler);
