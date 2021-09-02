import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { checkUserRequest, logoutRequest } from "../redux";
import { useHistory } from "react-router";
// import
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";

// 색 적용은 나중에 해보기
// import { createTheme } from '@material-ui/core/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#ffd149',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function TopBar({ userStatus, checkUserRequest }) {
  useEffect(() => {
    // 렌더링
    checkUserRequest();

    // 현재 경로가 '/'라면 Home으로 이동
    if (thisPath === "/") {
      history.push("/Home");
    }
  }, []);
  const history = useHistory();
  let thisPath = history.location.pathname;
  const classes = useStyles();

  const loginButton = (
    <div>
      <Button href="/Login" color="inherit">
        로그인
      </Button>
      <Button href="/SignUp" color="inherit">
        회원가입
      </Button>
    </div>
  );
  const logoutButton = <Button color="inherit">로그아웃</Button>;
  // 사용자에게 보여지는 부분
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Kotudy
          </Typography>
          {userStatus.isLoggedIn ? logoutButton : loginButton}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userStatus: state.authentication.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutRequest: () => {
      return dispatch(logoutRequest());
    },
    checkUserRequest: () => {
      return dispatch(checkUserRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
