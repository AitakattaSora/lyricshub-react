import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Lyrics from './Lyrics';
import { CardActions } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '80vw',
    marginBottom: 20,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  media: {
    width: 200,
    height: 200,
    minHeight: 200,
    minWidth: 200,
  },
});

const Track = (props) => {
  const { artists, title, artwork, lyrics, onClick } = props;

  // Feat
  const songArtists =
    artists.length > 1
      ? artists[0] +
        ' feat. ' +
        artists
          .filter((_, i) => i > 0)
          .filter((el) => el)
          .join(', ')
      : artists[0];

  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={onClick}>
      <CardMedia
        className={classes.media}
        image={artwork}
        title='Album cover'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {songArtists}
        </Typography>
        <Typography variant='body2' color='textPrimary' component='p'>
          <Lyrics content={lyrics} minimal />
        </Typography>
        <CardActions className={classes.buttons}>
          <Typography variant='body2' color='textSecondary' component='p'>
            Click to see more...
          </Typography>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Track;
