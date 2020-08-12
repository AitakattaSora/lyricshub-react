import React from 'react';

const Lyrics = ({ content, minimal }) => {
  if (!content) return <React.Fragment>No lyrics yet :(</React.Fragment>;

  let lines = content.split('\n');

  // filter lines with section header and empty ones'
  if (minimal) {
    const lineRegexp = /(\[)|(^$)/;
    lines = lines
      .filter((line) => !lineRegexp.test(line))
      .filter((_, i) => i < 7);
  }

  return (
    <React.Fragment>
      {lines.map((line, i) => {
        return (
          <span key={i}>
            {line}
            <br />
          </span>
        );
      })}
    </React.Fragment>
  );
};

export default Lyrics;
