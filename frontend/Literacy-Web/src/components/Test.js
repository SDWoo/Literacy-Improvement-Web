import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {} from "../redux";

function Test() {
  useEffect(() => {
    // 렌더링
  }, []);

  // 사용자에게 보여지는 부분
  return <div>Hi</div>;
}

const mapStateToProps = (state) => {
  return {
    // userId: state.authentication.status.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // getVotes: (nam) => {
    //   return dispatch(getVotes(nam));
    // },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Test);
