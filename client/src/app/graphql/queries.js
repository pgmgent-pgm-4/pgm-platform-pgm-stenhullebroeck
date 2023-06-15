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

export const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    projects(orderBy: publishedAt_DESC) {
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

export const GET_PROJECT_BY_ID = gql`
  query GetProjectById($id: ID!) {
    project(where: { id: $id }) {
      id
      title
      description
      picture {
        url
        id
      }
      body {
        html
      }
      course {
        id
        name
      }
      authUser {
        id
        username
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
    blogs(orderBy: updatedAt_DESC, first: 25) {
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

export const GET_BLOG_BY_ID = gql`
  query GetBlogById($id: ID!) {
    blog(where: { id: $id }) {
      id
      title
      description
      picture {
        url
        id
      }
      body {
        html
      }
    }
  }
`;

export const GET_TEAM_MEMBERS = gql`
  query GetTeamMember(
    $memberType: MemberType = Student
    $first: Int = 50
    $_search: String = ""
  ) {
    teamMembers(
      first: $first
      where: { memberType: $memberType, _search: $_search }
      orderBy: publishedAt_DESC
    ) {
      id
      firstName
      lastName
      memberType
      jobTitle
      picture {
        id
        url
      }
    }
  }
`;

export const GET_ALL_SERVICES = gql`
  query GetAllServices {
    services {
      id
      title
      description
    }
  }
`;

export const GET_HERO = gql`
  query MyQuery {
    asset(where: { id: "clixatn531jrl0bten9bagwcz" }) {
      id
      url
      width
      height
      mimeType
      size
    }
  }
`;

export const GET_3_PROJECTS = gql`
  query GetAllProjects {
    projects(orderBy: publishedAt_DESC, first: 3) {
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

export const GET_3_BLOGS = gql`
  query GetAllBlogs {
    blogs(orderBy: updatedAt_DESC, first: 3) {
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

export const GET_3_SERVICES = gql`
  query GetAllServices {
    services(first: 3) {
      id
      title
      description
    }
  }
`;
