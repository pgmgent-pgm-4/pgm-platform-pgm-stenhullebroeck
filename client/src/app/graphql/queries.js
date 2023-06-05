import { gql } from '@apollo/client';

export const GET_ALL_LECTURERS = gql`
  query GetAllLecturers {
    lecturers(first: 15) {
      id
      firstName
      lastName
      initials
      courses {
        name
      }
    }
  }
`;

// export const GET_ALL_COURSES = gql`
//   query GetAllCourses {
//     courses {
//       name
//       description
//       year
//       studyPoints
//       semester
//       period
//       lecturers {
//         id
//         firstName
//         lastName
//       }
//     }
//   }
// `;

export const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    projects {
      id
      title
      description
      body {
        text
      }
      course {
        id
        name
      }
    }
  }
`;

export const GET_ALL_COURSES = gql`
  query GetAllCourses {
    courses(first: 25, orderBy: period_ASC) {
      id
      name
      description
      studyPoints
      year
      semester
      period
      programmeLine {
        id
        name
        description
        colorCode
      }
      lecturers {
        id
        firstName
        lastName
        initials
      }
    }
  }
`;

export const GET_ALL_PROGRAMME_LINES = gql`
  query GetAllProgrammeLines {
    programmeLines {
      courses(orderBy: period_ASC) {
        description
        id
        name
        period
        year
        studyPoints
        semester
        lecturers {
          id
          firstName
          lastName
          initials
        }
      }
      colorCode
      name
      id
      description
    }
  }
`;

export const GET_AUTH_USER = gql`
  query GetAuthUser($id: ID!) {
    authUser(where: { id: $id }) {
      email
      username
      profile {
        id
        firstName
        lastName
        dayOfBirth
      }
    }
  }
`;

export const GET_ALL_BLOGS = gql`
  query GetAllBlogs {
    blogs(orderBy: updatedAt_DESC) {
      id
      description
      title
      updatedAt
      picture {
        id
        url
      }
      body {
        html
      }
    }
  }
`;

export const GET_COURSE_BY_ID = gql`
  query GetCourseById($id: ID!) {
    course(where: { id: $id }) {
      id
      name
      description
      ectsUrl
      period
      semester
      studyPoints
      year
    }
  }
`;

// export const GET_ALL_COMMUNITIES = gql`
//   query GetAllCommunities {
//     communities {
//       name
//       id
//       description
//       createdAt
//       authUser {
//         username
//       }
//     }
//   }
// `;

// export const GET_ALL_POSTS_SMALL = gql`
//   query GetAllPosts {
//     posts {
//       id
//       title
//     }
//   }
// `;

// export const GET_ALL_POSTS_SMALL_WITHPAGINATION = gql`
//   query GetPostsWithPagination($skip: Int = 10, $first: Int = 20) {
//     postsConnection(first: $first, skip: $skip) {
//       pageInfo {
//         pageSize
//         hasNextPage
//         hasPreviousPage
//         endCursor
//       }
//       aggregate {
//         count
//       }
//       edges {
//         node {
//           id
//           title
//         }
//       }
//     }
//   }
// `;

// export const GET_POST_DETAILS = gql`
//   query GetPostById($postId: ID!) {
//     post(where: { id: $postId }) {
//       id
//       title
//       synopsis
//       body {
//         html
//       }
//       thumbnailUrl
//       authUser {
//         username
//         profile {
//           firstName
//           lastName
//         }
//       }
//       tags {
//         name
//       }
//       category {
//         name
//       }
//     }
//   }
// `;
