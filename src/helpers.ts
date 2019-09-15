import { GraphQLScalarType } from "graphql";

export const json = new GraphQLScalarType({
    name: "JSON",
    description: "Any json object",
  
    serialize(value: any) {
      return value; // value sent to the client
    },
  
  });


  export enum paymentStatus {
    "PROCESSING" = "PROCESSING",
    "COMPLETE" = "COMPLETE",
    "FAILED" = "FAILED"  
}