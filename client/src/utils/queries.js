import { gql } from "@apollo/client";

export const GET_ME = gql`
  query getMe {
    me {
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
      events {
        name
        date
        location
        venue
        artists
      }
    }
  }
`;

export const GET_USERS = gql`
  query getUsers {
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
    events {
      name
      date
      location
      venue
      artists
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query userById($userbyidId: ID!) {
    userbyid(id: $userbyidId) {
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
      events {
        name
        date
        location
        venue
        artists
      }
    }
  }
`;

export const GET_EVENTS = gql`
  query getEvents {
    events {
      id
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
      id
      name
      date
      location
      venue
      artists
    }
  }
`;
