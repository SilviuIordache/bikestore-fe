import axios from 'axios';

class Config {
  constructor() {
    this.apiUrl;
    this.imageUrl;
  }

  async get() {
    const res = await axios.get('/app/config');
    if (document.location.origin.includes('localhost')) {
      this.apiUrl = res.data.apiUrl.dev;
      this.imageUrl = res.data.imageUrl.dev;
    } else {
      this.apiUrl = res.data.apiUrl.prod;
      this.imageUrl = res.data.imageUrl.prod;
    }
  }
}

export const config = new Config();
