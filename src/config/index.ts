import dotenv from 'dotenv';
dotenv.config();

const environment = {
  port: process.env.PORT || 4000,
  name: process.env.NODE_ENV || 'localhost',
};

const database = {
  mongodb: {
    URI: process.env.MONGODB_CONNECT,
  },
};

export { environment, database };
