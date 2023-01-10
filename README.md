# Frontend Interview Task

## Introduction 

The code provided is a React application that display a News Feed, it has a `App` component and `Post` component, the `App` component display the `Post` component 5 times and passing it props, these props are hardcoded data of users and posts. The `Post` component accepts a set of props and displays them in a structured format with some inline styling, such as the title, content, author name, avatar, and created date of the post.

The data for the posts and users are hardcoded in the `data.ts` file in the format of `PostsData` and `UsersData` arrays. The `Post` component accesses the data through these variables, and maps the author name, avatar and created date of the post using the UsersData array, whereas title and content are fetched from PostsData array.

## Task

Your task is to improve the provided code in the following ways:

1. Instead of hardcoding the data in the App component, you should make HTTP requests to a local JSON server to retrieve the data for the posts and users.

1. Look for potential errors in the code!

1. Handle any error states that may occur during the requests and display a meaningful error message to the user.

1. Refactor the components in a way that is both sustainable and makes sense.

1. Display different the posts instead of hard coding 5 post by fetching the data from the server, and handle displaying these posts sorted by recently created.

### Note

The server contains 500 users in the database and 5000 posts so think very carefully about how you would display these on the screen. Take into consideration that this Newsfeed application should be useable on both mobile and desktop and in conditions where the internet connection maybe potentially be slow or randomly interrupted. 

### Running the Local JSON Server

1. You can start the local `json-server` by running the command `npx json-server --watch db.json`

The JSON server will now be running at `http://localhost:3004/` and you can make requests to it to retrieve the data for the posts and users.
