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
 

## Interview Marking Criteria

1. Retrieve data for the posts and users from a local JSON server using HTTP requests
    - The candidate successfully retrieves data for the posts and users using the `fetch` API or another library of their choice.
    - The candidate makes use of appropriate React hooks, such as `useEffect` and `useState`, to handle the data retrieval and updates to the component's state.

1. Handle any error states that may occur during the requests and display a meaningful error message to the user.
    - The candidate handles any errors that occur during the data retrieval and displays a meaningful error message to the user.
    - The candidate provides a way for the user to refresh the page or try again if the error is temporary.
    
1. Refactor the `Post` component to use more appropriate component types, such as `div` for layout and `Posts` component, and extract any repeated styles into CSS classes.
    - The candidate refactors the `Post` component to use more semantically appropriate component types.
    - The candidate extract any repeated styles into CSS classes and adds them to the component.
  
1. Display all the posts instead of hard coding 5 post
    - The candidate uses data retrieved from the server to dynamically generate the `Post` components, rather than hard-coding a set number of them.
    - The candidate can implements pagination mechanism or infinite scroll mechanism

1. Display loading spinner when the data is being fetched from server
    - The candidate displays a loading spinner or some kind of loading message while the data is being fetched from the server.
    - The candidate hides the loading spinner or message once the data is successfully retrieved and displayed.
    - The candidate implements or suggests using skeletons for each post when loading.

1. Code Quality
    - The candidate follows the conventions and best practices in code formatting, variable naming, commenting, and so on.
    - The candidate properly splits the code into reusable components and functions
    - The candidate uses a linter such as eslint to keep the code consistent and clean

1. Error handling
    - The candidate implements error handling mechanism where ever required
    - The candidate implements a retry for fetching with expontential backoff
    - The candidate logs the error in browser or some kind of server log
    - The candidate implements error boundaries for handling errors in the application

1. Code Optimization
    - The candidate uses various techniques such as memoization to make the code more efficient and performant
    - The candidate implements lazy loading for images and other assets
    - The candidate uses best practices for resource management such as `useEffect` cleanup function to avoid unnecessary re-renders and memory leaks

1. Not overloading the server
    - The candidate prevents excess requests happening through throttling and using caching

1. Offline Mode / Network Status
    - The candidate checks network status before requests are made or handle the `onError` state of fetch.
    - The candidate provides fallback data or a caching strategy when it comes to both loading the data initially.
    - The candidate mentions using `indexDb` or any other technology in order to store data locally.
    - The candidate tests offline mode through dev tools.
