
const API_URL = "http://localhost:3004"

export function getPostById(id: string) {
  return fetch(`${API_URL}/posts/${id}`).then((res) => res.json());
}

// export function getPosts() {
//   return fetch(`${API_URL}/posts`).then((res) => res.json());
// }

export function getUserById(id: string) {
  return fetch(`${API_URL}/users/${id}`).then((res) => res.json());
}

export function getUsers() {
  return fetch(`${API_URL}/users`).then((res) => res.json());
}


export function getPosts() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    fetch(`${API_URL}/posts`).then((res) => {
      if (random < 0.1) {
        reject("Failed to fetch posts");
      } else if (random < 0.3) {
        setTimeout(() => {
          resolve(res.json());
        }, 3000);
      } else {
        resolve(res.json());
      }
    })
  });
}


