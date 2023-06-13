import { faker } from '@faker-js/faker';
import { htmlToSlateAST } from '@graphcms/html-to-slate-ast';

import client from './graphql_client';
import { generateValueBetweenMinAndMax, generateTimestamps } from './utils';
import uploadMediumByRemoteUrl from './upload-medium';

const mutationCreateBlog = `
mutation CreateBlog($id: ID!, $title: String!, $description: String!, $body: RichTextAST!, $id1: ID!) {
    createBlog(
      data: {title: $title, body: $body, authUser: {connect: {id: $id1}}, picture: {connect: {id: $id}}, description: $description}
    ) {
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
      id
    }
  }
`;

const queryGetAuthUsers = `
query GetAllAuthUserIds {
    authUsers {
      id
    }
  }
`;

(async () => {
  /*
   * Get all AuthUser ids
   */
  let { authUsers } = await client.request(queryGetAuthUsers);

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
   * Create a Blog
   */
  const createBlog = async ({
    title,
    description,
    body,
    pictureId,
    authUserId,
  }) => {
    try {
      const { createBlog } = await client.request(mutationCreateBlog, {
        title,
        description,
        body,
        id: pictureId,
        id1: authUserId,
      });

      if (!createBlog) {
        throw new Error(`Can't create the blog with title ${title}`);
      }

      console.log(`Created blog with title ${createBlog.title}`);
    } catch (error) {
      console.error(error);
    }
  };

  /*
   * Create a Blog
   */
  const createBlogs = async (n = 20) => {
    const promises = [];

    for (let i = 0; i < n; i++) {
      const result = await uploadMediumByRemoteUrl(faker.image.avatar());
      const authUserId =
        authUsers[generateValueBetweenMinAndMax(0, authUsers.length - 1)].id;
      const ast = await htmlToSlateAST(
        getRandomBody(generateValueBetweenMinAndMax(1, 4))
      );

      promises.push(
        await createBlog({
          title: faker.lorem.sentence(generateValueBetweenMinAndMax(2, 10)),
          description: faker.lorem.paragraph(
            generateValueBetweenMinAndMax(2, 10)
          ),
          body: { children: ast },
          pictureId: result.id,
          authUserId,
        })
      );

      return await Promise.all(promises);
    }
  };

  await createBlogs(1);
})();
