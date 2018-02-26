import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  withStyles,
  IconButton
} from 'material-ui';
import {Edit, Delete} from 'material-ui-icons';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const MAX_PREVIEW_FIELDS = 7;

class TemplateListItem extends Component {
  static propTypes = {
    template: PropTypes.object.isRequired,
    navigate: PropTypes.func.isRequired,
    classes: PropTypes.object,
    match: PropTypes.object.isRequired
  };

  render() {
    const {template, match, navigate, classes} = this.props;

    return (
      <Card className={classes.templateCard}>
        <CardContent className={classes.templateCardContent}>
          <Typography variant="headline">{template.label}</Typography>
          <Typography variant="subheading" color="textSecondary">
            {template.name}
          </Typography>
          <Typography component="p">
            <ul>
              {template.fields.slice(0, MAX_PREVIEW_FIELDS).map(it => (
                <li key={it.name}>{it.name}: {it.type}</li>))}
            </ul>
          </Typography>
          <div className={classes.contentFadeOut}/>
        </CardContent>
        <CardActions disableActionSpacing>
          <Link to={`${match.url}/${template.id}`}>
          <IconButton> <Edit/></IconButton>
          </Link>
          <IconButton><Delete/></IconButton>
        </CardActions>
      </Card>
    );
  }
}

const styles = theme => ({
  templateCard: {
    flex: '0 0 300px',
    margin: '5px 10px 5px 0'
  },
  templateCardContent: {
    height: '200px',
    overflow: 'hidden',
    position: 'relative'
  },
  contentFadeOut: {
    height: '50px',
    position: 'absolute',
    width: '100%',
    left: 0,
    bottom: 0,
    background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, 
      ${theme.palette.background.paper} 100%)`
  }
});

export default withStyles(styles)(TemplateListItem);