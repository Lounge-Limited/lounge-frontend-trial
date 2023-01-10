import { faker } from '@faker-js/faker';
import { User, Post } from './data';

export const generateUsers = (numUsers: number): User[] => {
  const users = [];
  for (let i = 0; i < numUsers; i++) {
    const user: User = {
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      avatar_url: faker.image.avatar(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };

    // Corrupt some of the data by replacing a field with a random string
    if (Math.random() < 0.1) {
      user.name = faker.random.word();
    }
    if (Math.random() < 0.05) {
      user.avatar_url = faker.random.word();
    }
    if (Math.random() < 0.01) {
      user.birthdate = new Date(faker.random.word());
    }
    users.push(user);
  }
  return users;
};

export const generatePosts = (numPosts: number, users: User[]): Post[] => {
  const posts = [];
  for (let i = 0; i < numPosts; i++) {
    const post: Post = {
      id: faker.datatype.uuid(),
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(),
      created_at: faker.date.past(),
      updated_at: faker.date.recent(),
      author_uid: faker.helpers.arrayElement(users).id
    };

    // Corrupt some of the data by replacing a field with a random string
    if (Math.random() < 0.1) {
      post.title = faker.random.word();
    }
    if (Math.random() < 0.05) {
      post.content = faker.random.words();
    }
    if (Math.random() < 0.01) {
      post.updated_at = new Date(faker.random.word());
    }
    if (Math.random() < 0.05) {
      post.author_uid = faker.datatype.uuid();
    }
    if (Math.random() < 0.01) {
      //@ts-ignore
      post.author_uid = undefined;
    }
    posts.push(post);
  }
  return posts;
};

// Easy way to export data as JSON within React

export function exportUserInfo() {
  const users = generateUsers(100);
  const posts = generatePosts(5000, users);
    const fileData = JSON.stringify({
      users: users,
      posts: posts,
    });
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "db.json";
    link.href = url;
    link.click();
  }
