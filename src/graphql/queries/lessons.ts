import { gql } from '@apollo/client';

export const QUERY_LESSONS = gql`
  query QueryLessons {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      title
      availableAt
      lessonType
    }
  }
`;
