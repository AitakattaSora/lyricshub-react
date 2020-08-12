const faker = require('faker');

module.exports = () => {
  const data = { lyrics: [] };

  const amount = 37;

  for (let i = 1; i < amount; i++) {
    const artists = [];

    const artistName = faker.name.firstName();
    const artwork = `${faker.image.abstract(300, 300)}?random=${
      Date.now() * i
    }`;

    artists.push(artistName);

    if (i % 5 === 0) {
      const featArtist = faker.name.lastName();
      artists.push(featArtist);
    }

    data.lyrics.push({
      id: i,
      artists,
      track: faker.random.word(),
      album: {
        name: faker.random.word(),
        artwork,
      },
      lyrics: faker.lorem.lines(30),
    });
  }

  return data;
};
