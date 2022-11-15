import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization:
      'Client-ID 41a663a03bfd356be495ed657077aa4b9aa626d435ba7f90649795566624c7c8',
  },
});
