import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Lyrics from './Content/Lyrics';
import { Typography, Button, TextField } from '@material-ui/core';
import { LyricsAPI } from '../api/api';
import { Formik, Form } from 'formik';
import styles from '../styles/SongPage.module.css';
import * as yup from 'yup';
import Loader from './common/Loader';

const SongPage = (props) => {
  const trackId = props.match.params.id;

  const [track, setTrack] = useState(null);
  const [editMode, setEditMode] = useState(false);

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

  const validationSchema = yup.object({
    lyrics: yup
      .string()
      .required('Field is required')
      .min(100, 'Not enough characters'),
  });

  return (
    <div style={{ marginBottom: 100 }}>
      <div className={styles.actionsContainer}>
        {!track ? (
          <Loader />
        ) : track.lyrics === null ? (
          <Button
            variant='contained'
            color='primary'
            onClick={() => setEditMode(!editMode)}
          >
            Add lyrics
          </Button>
        ) : (
          <Button
            variant='contained'
            color='primary'
            onClick={() => setEditMode(!editMode)}
          >
            Edit Lyrics
          </Button>
        )}

        {editMode && (
          <Button
            variant='contained'
            color='secondary'
            onClick={() => setEditMode(false)}
          >
            Cancel
          </Button>
        )}
      </div>
      <div className='lyricsContainer'>
        {track ? (
          editMode ? (
            // Show editForm with lyrics if track is not null and editMode is OFF
            <Formik
              initialValues={{ lyrics: track.lyrics }}
              validationSchema={validationSchema}
              onSubmit={(data, { setSubmitting }) => {
                if (track.lyrics === data.lyrics) {
                  alert("you've made no changes");
                  setEditMode(false);
                  return;
                }
                const newTrack = {
                  ...track,
                  lyrics: data.lyrics,
                };
                setTrack(newTrack);
                setSubmitting(true);
                LyricsAPI.updateTrackLyrics(newTrack).then((res) => {
                  // todo: improve error handling
                  if (res.status !== 200) {
                    alert('Unhandled error');
                    return;
                  }
                  setSubmitting(false);
                  setEditMode(false);
                });
              }}
            >
              {({
                values,
                errors,
                handleChange,
                handleSubmit,
                isSubmitting,
              }) => {
                return (
                  <Form onSubmit={handleSubmit}>
                    <TextField
                      id='outlined-multiline-static'
                      name='lyrics'
                      label='Lyrics'
                      multiline
                      rowsMax={100}
                      onChange={handleChange}
                      value={values.lyrics || ''}
                      style={{
                        width: 400,
                      }}
                      variant='outlined'
                      error={!!errors.lyrics}
                      helperText={errors.lyrics}
                    />
                    <div className={styles.actionsContainer}>
                      <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        disabled={isSubmitting}
                      >
                        Save
                      </Button>

                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => setEditMode(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          ) : (
            // Show the lyrics as text if track is not null and editMode is OFF
            <Typography variant='body1' color='textPrimary' component='p'>
              <Lyrics content={track.lyrics} />
            </Typography>
          )
        ) : (
          // Error message if track is null
          <Loader />
        )}
      </div>
    </div>
  );
};

export default withRouter(SongPage);
