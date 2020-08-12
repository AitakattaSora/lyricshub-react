import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import TrackCard from './TrackCard';
import { setSearch } from '../../redux/reducers/queries-reducer';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LyricsAPI } from '../../api/api';

const Content = (props) => {
  const [tracks, setTracks] = useState([]);
  const [query, setQuery] = useState(props.query);

  useEffect(() => {
    setQuery(props.query);

    if (query === '') {
      setTracks([]);
      return;
    }

    LyricsAPI.getTracksByQuery(props.query).then((data) => {
      setTracks(data);
    });
  }, [query, props.query]);

  return (
    <div class='content'>
      <div
        className='tracksList'
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {!tracks
          ? 'Loading'
          : tracks.length !== 0
          ? tracks.map((track) => (
              <Grid key={track.id} item xs={12}>
                <NavLink to={`/song/${track.id}`}>
                  <TrackCard
                    key={track.id}
                    artists={track.artists}
                    title={track.track}
                    artwork={track.album.artwork}
                    lyrics={track.lyrics}
                  />
                </NavLink>
              </Grid>
            ))
          : 'No results'}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    query: state.queries.searchQuery,
    tracks: state.queries.tracks,
  };
};

export default connect(mapStateToProps, { setSearch })(Content);
