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
      }
    }
  }
`;

export const GET_ARTISTS = gql`
  query artists {
    artists {
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
        # name
        # date
        # location
        # venue
        # artists
      }
    }
  }
`;

export const GET_USER_BY_ID = gql`
query user($userId: ID!) {
  user(id: $userId) {
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
