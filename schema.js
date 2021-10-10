
import { loadFilesSync } from '@graphql-tools/load-files';
import {mergeResolvers, mergeTypeDefs} from "@graphql-tools/merge";
import {makeExecutableSchema} from "@graphql-tools/schema";
import path from 'path';
const __dirname = path.resolve();

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.js`)

export const typeDefs = mergeTypeDefs(loadedTypes);
export const resolvers = mergeResolvers(loadedResolvers);

