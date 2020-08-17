// {
//   "baseUrl": "http://localhost",
//   "port": "5000"
// }

const config = {
  baseUrl: process.env.NODE_ENV == 'production' ? 'http://localhost' : '',
  port: '5000',
};

export default config;
