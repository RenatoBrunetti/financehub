import dotenv from 'dotenv';
dotenv.config();
import { database } from './config';

// Mongodb
import mongoose from 'mongoose';
const mongoURI: string = database.mongodb.URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Express
import http from 'http';
import express from 'express';
import { router } from './routes';
const app = express();
const httpServer = http.createServer(app);
app.use(express.json());
app.use(router);

// GraphQL
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  formatError: (error): any => {
    console.log('🚨 [ Error ]:');
    console.log('=====================================================');
    console.log(error);
    console.log('=====================================================');
    return error;
  },
});

server.applyMiddleware({ app });
server.installSubscriptionHandlers(httpServer);

export { app, server };
