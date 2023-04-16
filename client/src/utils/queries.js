import { gql } from '@apollo/client';

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
    thumbnailImg
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
    users {
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
    events {
      name
      date
      location
      venue
      artists
    }}
  }
`;

export const GET_ARTISTS = gql`
      query artists{
      artists{
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
      events {
        _id
        name
        date
        location
        venue
        artists
      }}
    }
`;

export const GET_USER_BY_ID = gql`
query userById($userbyidId: ID!) {
  userbyid(id: $userbyidId) {
    user{
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
    events {
      name
      date
      location
      venue
      artists
    }
  }}
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
    events{
    id
    name
    date
    location
    venue
    artists
  }}
}
`;