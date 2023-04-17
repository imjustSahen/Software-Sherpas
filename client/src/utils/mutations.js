import { gql } from "@apollo/client";

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
        thumbnailImg
        artistDescription
        spotifyId
        instagramUrl
        spotifyUrl
        soundcloudUrl
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($input: UserInput) {
    addUser(input: $input) {
      token
      user {
        _id
        firstName
        lastName
        email
        artist
        artistName
        heroImage
        secondaryImage
        thumbnailImg
        artistDescription
        spotifyId
        instagramUrl
        spotifyUrl
        soundcloudUrl
      }
    }
  }
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
