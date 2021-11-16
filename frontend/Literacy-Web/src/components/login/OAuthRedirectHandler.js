// 리다이렉트될 화면
// OAuthRedirectHandeler.js

import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { kakaoAuthRequest } from "../../redux";
import { useHistory } from "react-router";

//import Spinner from "./Spinner";

function OAuthRedirectHandler({ kakaoAuthRequest, isLoggedIn }) {
  const history = useHistory();

  useEffect(() => {
    kakaoAuthRequest(code);
  }, []);

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  if (isLoggedIn === true) {
    // 카카오 로그인 되면
    history.push("/Home");
  }

  return <div>hello kakao</div>;
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.kakaoAuth.status.isLoggedIn,
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
