import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import TrackCard from './TrackCard';
import {
  setSubmitting,
  setCurrentPage,
} from '../../redux/reducers/queries-reducer';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LyricsAPI } from '../../api/api';
import Loader from '../common/Loader';
import MyPagination from '../common/MyPagination';

const SearchResultsPage = ({
  query,
  currentPage,
  isSubmitting,
  setSubmitting,
  setCurrentPage,
}) => {
  const [tracks, setTracks] = useState([]);
  const [total, setTotal] = useState(0);

  const pageSize = 5;

  useEffect(() => {
    setSubmitting(true);

    LyricsAPI.getTracksByQuery(query, currentPage, pageSize).then(
      ({ data, total }) => {
        setTotal(Math.ceil(total / pageSize));
        setSubmitting(false);
        setTracks(data);
      }
    );
  }, [query, currentPage, setSubmitting]);

  if (isSubmitting) {
    return <Loader />;
  }

  if (tracks.length === 0) {
    return <div className='search-page'>No results</div>;
  }

  return (
    <div className='search-page'>
      <div className='pagionation' style={{ marginBottom: 20 }}>
        <MyPagination
          total={total}
          page={currentPage}
          handleChange={setCurrentPage}
        />
      </div>
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

      <div className='pagionation'>
        <MyPagination
          total={total}
          page={currentPage}
          handleChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    query: state.queries.searchQuery,
    isSubmitting: state.queries.isSubmitting,
    currentPage: state.queries.currentPage,
  };
};

export default connect(mapStateToProps, {
  setSubmitting,
  setCurrentPage,
})(SearchResultsPage);
