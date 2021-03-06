import axios from 'axios';
import { cachingGet } from '../../utils';

class MovieDBAPI {
  constructor(api_key) {
    this.api_key = api_key;
    this.http = axios.create({
      baseURL: 'http://www.omdbapi.com/',
    });
    
    // cache get requests
    this.http.get = cachingGet(this.http.get);

    // intercept api omdbapi requests, and add api key param
    this.http.interceptors.request.use( (httpConfig) => {
        httpConfig.params = { apikey: this.api_key, ...(httpConfig.params || {}) }
        return httpConfig;
    });
  };

  getMovieById(id){
    return this.http.get('/', { params: {i: id} });
  }

  search(type = 'movie', term, page = 1){
    return this.http.get('/', { params: {s: term, type, page} });
  }
}

export default MovieDBAPI;
