/* eslint-disable no-underscore-dangle */

import React from 'react';
import { shape } from 'prop-types';
import { Meteor } from 'meteor/meteor';
import classNames from 'classnames';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { snackBarOpen } from '../../../modules/utility';
import fzValidator from '../../../modules/fzValidator';
import styles from './Profile.styles';
import { ASSET_FOLDER } from '../../../startup/configuration';

const rules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  industry: {
    maxLength: 30,
  },
  position: {
    maxLength: 30,
  },
};

const messages = {
  name: {
    required: 'Please enter a name at least 2 characters long',
    minLength: 'Please enter at least 2 characters for your name',
    maxLength: 'Please enter no more than 30 characters',
  },
  industry: {
    maxLength: 'Please enter no more than 30 characters',
  },
  position: {
    maxLength: 'Please enter no more than 30 characters',
  },
};

class oAuthProfile extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    return {
      name: nextProps.user.profile.name ? nextProps.user.profile.name : '',
      industry: nextProps.user.profile.industry ? nextProps.user.profile.industry : '',
      position: nextProps.user.profile.position ? nextProps.user.profile.position : '',
    };
  }

  state = ({
    formErrors: {},
    name: '',
    industry: '',
    position: '',
  });

  handleChange = field => (e) => {
    this.setState({
      [field]: e.target.value,
    });
  };

  formValidate = () => {
    const {
      name,
      industry,
      position,
    } = this.state;

    const input = {
      name,
      industry,
      position,
    };

    const formErrors = fzValidator(input, rules, messages);

    if (!formErrors) {
      this.handleSubmit(input);
      this.setState({ formErrors });
    } else {
      snackBarOpen('Sorry, please fix form errors before update!');
      this.setState({ formErrors });
    }
  };

  handleSubmit = (input) => {
    Meteor.call('users.editProfileOAuth', { profile: { ...input } }, (error) => {
      if (error) {
        snackBarOpen(error.reason.reason);
      } else {
        snackBarOpen('Profile updated!');
      }
    });
  };

  render() {
    const { user, classes } = this.props;
    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardContent className={classNames({
            [classes.headerColorFb]: !!user.services.facebook,
            [classes.headerColorGoogle]: !!user.services.google,
          })}
          >
            <div className={classes.cardTitleText} style={{ color: '#fff' }}>
              {user.services.facebook && 'Logged in with Facebook'}
              {user.services.google && 'Logged in with Google'}
            </div>
          </CardContent>
          <CardContent>
            {user.services.facebook ?
              <Typography display="body1">
                You are logged in as
                <span className={classes.bold}>
                  {` ${user.services.facebook.name} `}
                </span>
                using the email address
                <span className={classes.bold}>
                  {` ${user.services.facebook.email}.`}
                </span>
              </Typography>
              :
              <Typography display="body1">
                You are logged in {user.services.google.name ? <span>as <span className={classes.bold}>{user.services.google.name}</span></span> : ''} using the email address <span className={classes.bold}>{user.services.google.email}</span>.
              </Typography>
            }
          </CardContent>
          <CardActions>
            <Button
              onClick={() => Meteor.logout()}
              style={{ marginLeft: 'auto' }}
            >
              Log out
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardContent className={classes.headerColor}>
            <Grid className={classes.bkImage} container justify="flex-start" alignItems="center">
              <img src={`${ASSET_FOLDER}/market.png`} alt="" />
            </Grid>
            <div className={classes.cardTitleText}>
              Change Name Used In Nova
            </div>
          </CardContent>
          <CardContent>
            <TextField
              id="name"
              label="First Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
              style={{ marginRight: 20 }}
              error={Boolean(this.state.formErrors.name)}
              helperText={this.state.formErrors.name}
            />
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              style={{ marginLeft: 'auto' }}
              onClick={this.formValidate}
            >
              Update
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardContent className={classes.headerColor}>
            <Grid className={classes.bkImage} container justify="flex-start" alignItems="center">
              <img src={`${ASSET_FOLDER}/market.png`} alt="" />
            </Grid>
            <div className={classes.cardTitleText}>
              Industry and Position
            </div>
          </CardContent>
          <CardContent>
            <Typography display="body1">
              In what industry are you using Nova, and what is your positon?
            </Typography>
            <TextField
              id="industry"
              label="Industry"
              className={classes.textField}
              value={this.state.industry}
              onChange={this.handleChange('industry')}
              margin="normal"
              style={{ marginRight: 20 }}
              error={Boolean(this.state.formErrors.industry)}
              helperText={this.state.formErrors.industry}
            />
            <TextField
              id="position"
              label="Position"
              className={classes.textField}
              value={this.state.position}
              onChange={this.handleChange('position')}
              margin="normal"
              error={Boolean(this.state.formErrors.position)}
              helperText={this.state.formErrors.position}
            />
          </CardContent>
          <CardActions>
            <Button type="submit" style={{ marginLeft: 'auto' }} onClick={this.formValidate}>
              Update
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

oAuthProfile.propTypes = {
  user: shape({}).isRequired,
  classes: shape({}).isRequired,
};

export default withStyles(styles)(oAuthProfile);
