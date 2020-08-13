import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import TrackCard from './TrackCard';
import { setSearch, setSubmitting } from '../../redux/reducers/queries-reducer';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LyricsAPI } from '../../api/api';
import Loader from '../common/Loader';

const SearchResultsPage = (props) => {
  const [tracks, setTracks] = useState(null);
  const [query, setQuery] = useState(props.query);

  useEffect(() => {
    setQuery(props.query);

    LyricsAPI.getTracksByQuery(props.query).then((data) => {
      setTracks(data);
    });
  }, [query, props.query]);

  if (props.isSubmitting) {
    return <Loader />;
  }

  if (tracks === null) {
    return <div className='search-page'>Idi nahui</div>;
  }

  if (tracks.length === 0) {
    return <div className='search-page'>No results</div>;
  }

  return (
    <div className='content search-page'>
      <div
        className='tracksList'
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {tracks.map((track) => (
          <Grid
            key={track.id}
            item
            xs={12}
            style={{
              minWidth: '60vw',
            }}
          >
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
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    query: state.queries.searchQuery,
    isSubmitting: state.queries.isSubmitting,
  };
};

export default connect(mapStateToProps, { setSearch, setSubmitting })(
  SearchResultsPage
);
