import MovieDBApi from './movies-db';
import keys from '../keys';

const { omdb_api_key } = keys;

// initalize a new MovieDB API
const MovieDB = new MovieDBApi(omdb_api_key);

export {
  MovieDB,
}