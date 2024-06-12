import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: process.env.PORT || 3000,
  // BASE_URL: process.env.BASE_URL || '192.168.50.4',
  BASE_URL: process.env.BASE_URL || 'localhost',
  SECRET_KEY: process.env.SECRET_KEY || 'some-secret-key',
};

export default config;
