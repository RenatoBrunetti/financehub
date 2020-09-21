import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

const typesOptions = { recursive: true, extensions: ['graphql'] };
const typesArray = loadFilesSync(
  path.join(__dirname, '../../src'),
  typesOptions
);
const typeDefs = mergeTypeDefs(typesArray);

const resolversOptions = { recursive: true };
const resolversArray = loadFilesSync(
  path.join(__dirname, '../**/**.resolvers.*'),
  resolversOptions
);
const resolvers = mergeResolvers(resolversArray);

export { typeDefs, resolvers };
