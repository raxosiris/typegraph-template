import { Resolver, Query, Mutation } from "type-graphql";
import { json } from "./helpers";

import "./env";

@Resolver()
export class mainResolver {

  @Query(returns => json)
  async helloWorld (){
    return "Hello World!"
  }
  
}
