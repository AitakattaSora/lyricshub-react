import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

export const LyricsAPI = {
  getTracksByQuery: async (query, pageNumber = 1, pageSize) => {
    const response = await instance.get('lyrics', {
      params: {
        q: query,
        _page: pageNumber,
        _limit: pageSize,
      },
    });

    return {
      data: response.data,
      total: response.headers['x-total-count'],
    };
  },

  getTrack: async (trackId) => {
    const response = await instance.get('lyrics', {
      params: {
        id: trackId,
        singular: 1,
      },
    });

    return response.data;
  },

  getTracksByArtist: async (artist) => {
    const response = await instance.get('lyrics', {
      params: { artists_like: artist },
    });

    return response.data;
  },

  getTracksByTitle: async (title) => {
    const response = await instance.get('lyrics', {
      params: { track_like: title },
    });

    return response.data;
  },

  updateTrackLyrics: async (track) => {
    const response = await instance.put(`lyrics/${track.id}`, track);

    return response;
  },
};
