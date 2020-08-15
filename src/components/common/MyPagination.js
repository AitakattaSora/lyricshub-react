import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const MyPagination = ({ total, page, handleChange }) => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Pagination
        style={{
          margin: 'auto',
        }}
        count={total}
        page={page}
        showFirstButton
        showLastButton
        onChange={(_, value) => {
          handleChange(value);
        }}
      />
    </div>
  );
};

export default MyPagination;
