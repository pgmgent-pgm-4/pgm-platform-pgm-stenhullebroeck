import { faker } from '@faker-js/faker';
import { htmlToSlateAST } from '@graphcms/html-to-slate-ast';

import client from './graphql_client';
import { generateValueBetweenMinAndMax, generateTimestamps } from './utils';
import uploadMediumByRemoteUrl from './upload-medium';

const mutationCreateProject = `
mutation CreateProject($title: String!, $body: RichTextAST!, $description: String!, $id: ID!, $id1: ID!, $id2: ID!) {
    createProject(
      data: {title: $title, body: $body, description: $description, picture: {connect: {id: $id}}, course: {connect: {id: $id1}}, authUser: {connect: {id: $id2}}}
    ) {
    id
      body {
        markdown
      }
      title
      description
      picture {
        id
        height
        width
        handle
        mimeType
        url
        size
      }
    }
  }
`;

const queryGetAuthUsers = `
query GetAllAuthUserIds {
    authUsers(first: 100) {
        id
    }
}
`;

const queryGetCourses = `
query GetAllCourseIds {
    courses(first: 100) {
        id
    }
}
`;

(async () => {
  /*
   * Get all AuthUser ids
   */
  let { authUsers } = await client.request(queryGetAuthUsers);

  /*
   * Get all Course ids
   */
  let { courses } = await client.request(queryGetCourses);

  const getRandomBody = (n = 1) => {
    let body = '';
    for (let i = 0; i < n; i++) {
      body += `<h2>${faker.lorem.text(1)}</h2><p>${faker.lorem.paragraphs(
        generateValueBetweenMinAndMax(2, 10),
        '</p><p>'
      )}</p>`;
    }
    return body;
  };

  /*
   * Create a Project
   */
  const createProject = async ({
    title,
    description,
    body,
    pictureId,
    courseId,
    authUserId,
  }) => {
    try {
      const { createProject } = await client.request(mutationCreateProject, {
        title,
        description,
        body,
        id: pictureId,
        id1: courseId,
        id2: authUserId,
      });

      if (!createProject) {
        throw new Error(`Can't create the project with title ${title}`);
      }

      console.log(`Created project with title ${createProject.title}`);
      return createProject;
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * Create a Project
   */
  const createProjects = async (n = 1) => {
    const promises = [];

    for (let i = 0; i < n; i++) {
      const result = await uploadMediumByRemoteUrl(faker.image.avatar());
      const authUserId =
        authUsers[generateValueBetweenMinAndMax(0, authUsers.length - 1)].id;
      const courseId =
        courses[generateValueBetweenMinAndMax(0, courses.length - 1)].id;
      const ast = await htmlToSlateAST(
        getRandomBody(generateValueBetweenMinAndMax(1, 3))
      );

      promises.push(
        await createProject({
          title: faker.lorem.sentence(generateValueBetweenMinAndMax(2, 5)),
          description: faker.lorem.paragraph(
            generateValueBetweenMinAndMax(2, 5)
          ),
          body: { children: ast },
          pictureId: result.id,
          courseId,
          authUserId,
        })
      );

      return Promise.all(promises);
    }
  };

  await createProjects(10);
})();
