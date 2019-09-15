import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import {mainResolver} from './src/resolver'

async function bootstrap() {

    try{
  // build TypeGraphQL executable schema
  const schema = await buildSchema({
    resolvers: [ mainResolver],
    emitSchemaFile: true
  });
  
  // Create GraphQL server
  const server = new ApolloServer({ schema });

  // Start the server
  const { url } = await server.listen(process.env.PORT || 8000 );
  console.log(`Server is running, GraphQL Playground available at ${url}`);

} catch(e){
    console.error(e)
}
}

bootstrap();
