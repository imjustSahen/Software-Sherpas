import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
              id
              firstName
              lastName
              email
              artist
              artistName
              heroImage
              secondaryImage
              artistDescription
              spotifyId
              instagramUrl
              spotifyUrl
              soundcloudUrl
            }
        }
    };
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $artist: Boolean!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, artist: $artist) {
      token
      user {
        id
        firstName
        lastName
        email
        artist
        artistName
        heroImage
        secondaryImage
        artistDescription
        spotifyId
        instagramUrl
        spotifyUrl
        soundcloudUrl
      }
    }
  };
`; 

export const ADD_EVENT = gql`
  mutation addEvent($eventInput: EventInput!) {
    addEvent(eventInput: $eventInput) {
      events {
        _id
        name
        date
        location
        venue
        artists
      }
    }
  }
`;