import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $artist: Boolean!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, artist: $artist) {
    token
    user {
      _id
      firstName
      lastName
      email
      artist
      artistName
      spotifyId
      socialMedia
    }
  }
}
`;