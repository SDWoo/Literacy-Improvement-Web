/* 회원가입 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SignUp.css";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

class AuthSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      birth: "",
      work: "",
      userId: "",
      userPassword: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChangeWork = (e) => {
    this.setState({ work: e.target.value });
  };

  toastRegister_NotEnoughInfo = () => toast.error("모든 항목을 입력하세요.");
  toastRegister_Complete = () => toast("회원가입 되었습니다.");
  toastRegister_Failure = () => toast.error("회원가입 실패하였습니다.");

  handleRegister = (e) => {
    e.preventDefault();

    if (
      // 정보가 부족하면 오류 메시지 출력
      this.state.userName === "" ||
      this.state.work === "" ||
      this.state.birth === "" ||
      this.state.userId === "" ||
      this.state.userPassword === ""
    ) {
      this.toastRegister_NotEnoughInfo();
      return false;
    }

    let body = {
      userName: this.state.userName,
      birth: this.state.birth,
      work: this.state.work,
      userId: this.state.userId,
      userPassword: this.state.userPassword,
    };

    this.props.onRegister(body).then((success) => {
      if (!success) {
        //실패하면 아이디 재입력 받음
        this.toastRegister_Failure();
        this.setState({
          userId: "",
          userPassword: "",
        });
      } else {
        this.toastRegister_Complete();
      }
    });
  };

  render() {
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={useStyles.paper}>
            <Avatar className={useStyles.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              KOTUDY
            </Typography>
            <Typography component="subtitle2" variant="subtitle2">
              문해력 향상 프로젝트
            </Typography>
            <form className={useStyles.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="userName"
                    name="userName"
                    variant="outlined"
                    required
                    fullWidth
                    id="userName"
                    label="이름"
                    autoFocus
                    onChange={this.onChange}
                    value={this.state.userName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="birth"
                    name="birth"
                    variant="outlined"
                    required
                    fullWidth
                    id="birth"
                    label="생년월일 ex) 980102"
                    autoFocus
                    onChange={this.onChange}
                    value={this.state.birth}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    className={useStyles.formControl}
                  >
                    <InputLabel id="work">직업</InputLabel>
                    <Select
                      labelId="work"
                      id="work"
                      value={this.state.work}
                      onChange={this.onChangeWork}
                      label="Work"
                    >
                      <MenuItem value="preschooler">유치원생</MenuItem>
                      <MenuItem value="elementarySchoolStudent">
                        초등학생
                      </MenuItem>
                      <MenuItem value="middleSchoolStudent">중학생</MenuItem>
                      <MenuItem value="highSchoolStudent">고등학생</MenuItem>
                      <MenuItem value="universityStudent">대학생</MenuItem>
                      <MenuItem value="adult">성인</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="userId"
                    label="ID"
                    type="userId"
                    id="userId"
                    autoComplete="userId"
                    onChange={this.onChange}
                    value={this.state.userId}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="userPassword"
                    label="Password"
                    type="password"
                    id="userPassword"
                    autoComplete="current-userPassword"
                    onChange={this.onChange}
                    value={this.state.userPassword}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={useStyles.submit}
                onClick={this.handleRegister}
              >
                회원가입
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/SignIn" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
        <div>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Flip}
          />
        </div>
      </div>
    );
  }
}

AuthSignUp.propTypes = {
  onRegister: PropTypes.func,
};

AuthSignUp.defaultProps = {
  onRegister: (body) => {
    console.error("sign Up function not defined");
  },
};

export default AuthSignUp;
