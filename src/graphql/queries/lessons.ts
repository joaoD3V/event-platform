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

export const QUERY_LESSON_BY_SLUG = gql`
  query QueryLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        avatarURL
        bio
        name
      }
    }
  }
`;
