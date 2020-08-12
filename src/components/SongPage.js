import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Lyrics from './Content/Lyrics';
import { Typography } from '@material-ui/core';
import { LyricsAPI } from '../api/api';

const SongPage = (props) => {
  const trackId = props.match.params.id;
  const [track, setTrack] = useState(null);

  useEffect(() => {
    const fetchTrack = (id) => {
      if (!trackId) return;

      LyricsAPI.getTrack(id).then((data) => {
        setTrack(data);
      });
    };

    fetchTrack(trackId);
  }, [trackId]);

  if (!trackId) {
    return <div>No id provided</div>;
  }

  return (
    <div style={{ marginBottom: 100 }}>
      {track ? (
        <Typography variant='body1' color='textPrimary' component='p'>
          <Lyrics content={track.lyrics} />
        </Typography>
      ) : (
        'Nothing'
      )}
    </div>
  );
};

export default withRouter(SongPage);
