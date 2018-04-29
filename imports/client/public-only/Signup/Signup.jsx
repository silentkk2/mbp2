import React from 'react';
import { shape } from 'prop-types';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withStyles } from 'material-ui/styles';
import camelCase from 'lodash.camelcase';

import Grid from 'material-ui/Grid';
import { FormHelperText } from 'material-ui/Form';
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

import { snackBarOpen } from '../../../modules/utility';

import styles from './Signup.styles';

import fzValidator from '../../../modules/fzValidator';

const signupFormRules = {
  email: {
    required: true,
    maxLength: 50,
    email: true,
  },
  username: {
    required: true,
    maxLength: 15,
    camelCase: true,
  },
  password: {
    required: true,
    password: true,
    maxLength: 30,
  },
};

const signupErrorMessages = {
  email: {
    required: 'This field is required',
    email: 'Please enter a valid email',
    maxLength: 'Email field is too long!',
  },
  username: {
    required: 'This field is required',
    maxLength: 'Username is too long!',
    camelCase: 'Username cannot contain spaces or special characters',
  },
  password: {
    required: 'This field is required',
    password: 'Keep your account safe: at least 9 characters required, at least one uppercase letter and one number. Special characters allowed: $%@#£€*?&',
    maxLength: 'Password can be at most 30 characters!',
  },
};

function signUpFacebook() {
  Meteor.loginWithFacebook({
    requestPermissions: ['public_profile', 'email'],
  }, (err) => {
    if (err) {
      // handle error
    } else {
      // successful login!
    }
  });
}

function signUpGoogle() {
  Meteor.loginWithGoogle({
    requestPermissions: ['email'],
  }, (err) => {
    if (err) {
      // handle error
    } else {
      // successful login!
    }
  });
}

export class SignupComponent extends React.Component {
  state = ({
    formErrors: {},
    username: '',
    email: '',
    password: '',
  });

  formValidate = () => {
    const { email, password, username } = this.state;

    const input = {
      email,
      password,
      username,
    };

    const formErrors = fzValidator(input, signupFormRules, signupErrorMessages);

    if (!formErrors) {
      this.handleSubmit({
        email,
        password,
        username,
      });
    } else {
      this.setState({ formErrors });
    }
  };

  handleSubmit = ({ email, password, username }) => {
    const { history } = this.props;
    const newUser = {
      email,
      password,
      username,
    };

    Meteor.call('users.createNewUser', newUser, (error) => {
      if (error) {
        snackBarOpen(error.reason);
      } else {
        Meteor.loginWithPassword(
          email,
          password,
          (loginError) => {
            if (loginError) {
              snackBarOpen('Error Logging In');
            } else {
              Meteor.call('users.sendVerificationEmail');
              snackBarOpen('Welcome!');
              history.push('/signup');
            }
          },
        );
      }
    });
  };

  handleChangeField = field => (e) => {
    if (field === 'username') {
      this.setState({
        [field]: camelCase(e.target.value),
      });
    } else {
      this.setState({
        [field]: e.target.value,
      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
      >
        <Paper
          className={classes.signupBox}
          elevation={14}
        >
          <h2>Create New Account</h2>
          <form onSubmit={event => event.preventDefault()}>
            <Grid
              container
              direction="column"
            >
              <Button
                type="submit"
                fullWidth
                onClick={signUpFacebook}
                className={classes.facebook}
              >
                Facebook Sign Up
              </Button>
              <Button
                type="submit"
                fullWidth
                onClick={signUpGoogle}
                className={classes.google}
              >
                Google Sign Up
              </Button>
              <div
                className={classes.orText}
              >
                -
                OR
                -
              </div>
              <Input
                className={classes.marginTop}
                id="choose-username"
                placeholder="Pick A Username"
                autoComplete="username"
                value={this.state.username}
                onChange={this.handleChangeField('username')}
                error={!!this.state.formErrors.username}
                inputProps={{
                  maxLength: 15,
                }}
              />
              {this.state.formErrors.username ?
                <FormHelperText
                  error
                >
                  {this.state.formErrors.username}
                </FormHelperText>
                :
                ''
              }
              <Input
                className={classes.marginTop}
                id="choose-email"
                autoComplete="email"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.handleChangeField('email')}
                error={!!this.state.formErrors.email}
                inputProps={{
                  maxLength: 50,
                }}
              />
              {this.state.formErrors.email ?
                <FormHelperText
                  error
                >
                  {this.state.formErrors.email}
                </FormHelperText>
                :
                ''
              }
              <Input
                className={classes.marginTop}
                id="choose-password"
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                value={this.state.password}
                onChange={this.handleChangeField('password')}
                error={!!this.state.formErrors.password}
                inputProps={{
                  maxLength: 30,
                }}
              />
              {this.state.formErrors.password ?
                <FormHelperText
                  error
                >
                  {this.state.formErrors.password}
                </FormHelperText>
                :
                ''
              }
              <Button
                className={classes.marginTop}
                fullWidth
                onClick={this.formValidate}
              >
                Sign Up
              </Button>
            </Grid>
          </form>
          <p>Already have an account? <Link to="/login">Log In</Link>.</p>
        </Paper>
      </Grid>
    );
  }
}

SignupComponent.propTypes = {
  history: shape({}).isRequired,
  classes: shape({}).isRequired,
};

export default withStyles(styles)(SignupComponent);
