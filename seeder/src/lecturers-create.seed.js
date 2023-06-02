import { faker } from '@faker-js/faker';
import client from './graphql_client';
import { generateValueBetweenMinAndMax, generateTimestamps } from './utils';

const mutationCreateLecturer = `
mutation CreateLecturer($firstName: String!, $lastName: String!, $initials: String!) {
    createLecturer(data: {firstName: $firstName, lastName: $lastName, initials: $initials}) {
      id
      firstName
      lastName
      initials
      createdAt
    }
  }`;

(async () => {
  /*
   * Create a Lecturer
   */
  const createLecturer = async ({ firstName, lastName, initials }) => {
    try {
      const { createLecturer } = await client.request(mutationCreateLecturer, {
        firstName,
        lastName,
        initials,
      });

      if (!createLecturer) {
        throw new Error(
          `Can't create the lecturer with initials ${createLecturer.initials}!`
        );
      }

      console.log(`Lecturer created with initials ${createLecturer.initials}!`);
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * Create a Lecturers via promises
   */
  const createLecturers = async (n = 15) => {
    for (let i = 0; i < n; i++) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const initials =
        firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve) => setTimeout(resolve, 300 * i)).then(() =>
        createLecturer({
          firstName: firstName,
          lastName: lastName,
          initials: initials,
        })
      );
    }
  };
})();
