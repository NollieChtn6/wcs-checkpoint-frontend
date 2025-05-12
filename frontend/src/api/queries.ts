import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
query Countries {
  countries {
    id
    name
    code
    continent {
      name
    }
    emoji
  }
}`;

export const GET_CONTINENTS = gql`
query Continents {
  continents {
    id
    name
  }
}`;
