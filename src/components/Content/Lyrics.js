import React from 'react';

const Lyrics = ({ content, minimal }) => {
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
      {lines.length > 3
        ? lines.map((line, i) => {
            return (
              <span key={i}>
                {line}
                <br />
              </span>
            );
          })
        : 'no lyrics'}
    </React.Fragment>
  );
};

export default Lyrics;
