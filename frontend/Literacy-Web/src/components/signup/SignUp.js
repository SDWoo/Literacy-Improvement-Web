/* 회원가입 */
import React, { Component } from "react";
import { useSelector } from "react-redux";
import AuthSignUp from "./AuthSignUp";
import { connect } from "react-redux";
import { registerRequest } from "../../redux/signup/actions";

class SignUp extends Component {
  handleRegister = (body) => {
    return this.props.registerRequest(body).then(() => {
      console.log(this.props.history);
      if (this.props.statusReg === "SUCCESS") {
        // 회원가입 성공시 로그인 화면으로 돌아감.
        this.props.history.push("/Login");
        return true;
      } else {
        console.log("회원가입 실패");
        return false;
      }
    });
  };

  render() {
    return (
      <div>
        <AuthSignUp onRegister={this.handleRegister} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    statusReg: state.register.register.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerRequest: (body) => {
      return dispatch(registerRequest(body));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
