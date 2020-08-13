import React from 'react';
import { connect } from 'react-redux';
import { setSearch, setSubmitting } from '../../redux/reducers/queries-reducer';
import { TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';

const SearchBar = (props) => {
  const history = useHistory();

  const routeChange = () => {
    let path = `/`;
    history.push(path);
  };

  return (
    <div className='search-bar'>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={(data, { resetForm }) => {
          props.setSubmitting(true);
          props.setSearch(data.search);
          routeChange();
          props.setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              name='search'
              value={values.search}
              onChange={handleChange}
              size='small'
              color='primary'
              variant='outlined'
              placeholder='Search lyrics'
              style={{
                backgroundColor: '#F7F7F7',
                borderRadius: 4,
              }}
            />
            <IconButton
              size='medium'
              color='inherit'
              type='submit'
              aria-label='search'
            >
              <SearchIcon />
            </IconButton>
          </form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    query: state.queries.searchQuery,
  };
};

export default connect(mapStateToProps, { setSearch, setSubmitting })(
  SearchBar
);
