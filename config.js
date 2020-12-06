import axios from 'axios';

class Config {
  constructor() {
    this.apiUrl;
  }

  async get() {
    const res = await axios.get('/app/config');
    if (document.location.origin.includes('localhost')) {
      this.apiUrl = res.data.apiUrl.dev;
    } else {
      this.apiUrl = res.data.apiUrl.prod;
    }
  }
}

export const config = new Config();
