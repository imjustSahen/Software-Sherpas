import { gql } from '@apollo/client';

export const GET_ME = gql`
query getMe {
  me {
    _id
    firstName
    lastName
    email
    artist
    artistName
    spotifyId
  }
}
`;

export const GET_USERS = gql`
  query getUsers {
      users {
      _id
      firstName
      lastName
      email
      artist
      artistName
      spotifyId
    }
  }
`;

export const GET_USER_BY_ID = gql`
query userById($userbyidId: ID!) {
  userbyid(id: $userbyidId) {
    _id
    firstName
    lastName
    email
    artist
    artistName
    spotifyId
  }
}
`;

export const GET_EVENTS = gql`
query getEvents {
  events {
    _id
    name
    date
    location
    venue
    artists
  }
}
`;

export const GET_EVENT_BY_ID = gql`
query eventById($eventbyidId: ID!) {
  eventbyid(id: $eventbyidId) {
    _id
    name
    date
    location
    venue
    artists
  }
}
`;