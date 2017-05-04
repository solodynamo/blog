const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default {
  port: env.PORT || 8081,
  host: env.HOST || 'localhost',
  url: 'https://gentle-atoll-86567.herokuapp.com/api/starships'
};
