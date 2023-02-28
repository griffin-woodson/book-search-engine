import { gql } from '@apollo/client';

export const ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks {
        title
        description
        bookId
        authors
        image
        link
      }
    }
  }
`