import React from 'react';
import { PostsData, UsersData } from './data';

const Post = ({
  title,
  content,
  author,
  avatar,
  createdAt,
}: {
  title: string;
  content: string;
  author: string;
  avatar: string;
  createdAt: string;
}) => {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        backgroundColor: 'white',
      }}
    >
      <h1
        style={{
          fontSize: '20px',
          margin: '0',
        }}
      >{title}</h1>
      <p
        style={{
          fontSize: '14px',
          margin: '0',
          padding: '10px 0',
        }}
      >{content}</p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img

            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              marginRight: '5px',
            }}
            src={avatar}
            alt="avatar"
          />
          <p
            style={{
              fontSize: '12px',
              margin: '0',
            }}
          >{author}</p>
            </div>
        <p
          style={{
            fontSize: '12px',
            margin: '0',
          }}
        >{createdAt}</p>
        </div>
    </div>
  )
}



function App() {
  return (      
  <div
    style={{
      margin: "auto",
      width: "80%",
      padding: "10px",
      backgroundColor: "#f0f0f0",
    }}
  >
    <h1>News Feed</h1>
      <Post
      title={PostsData[0].title}
      content={PostsData[0].content}
      author={UsersData[0].name}
      avatar={UsersData[0].avatar_url}
      createdAt={PostsData[0].created_at.toString()}
      />
    <Post
      title={PostsData[1].title}
      content={PostsData[1].content}
      author={UsersData[1].name}
      avatar={UsersData[1].avatar_url}
      createdAt={PostsData[1].created_at.toString()}
      />
    <Post
      title={PostsData[2].title}
      content={PostsData[2].content}
      author={UsersData[2].name}
      avatar={UsersData[2].avatar_url}
      createdAt={PostsData[2].created_at.toString()}
      />
    <Post
      title={PostsData[3].title}
      content={PostsData[3].content}
      author={UsersData[3].name}
      avatar={UsersData[3].avatar_url}
      createdAt={PostsData[3].created_at.toString()}
      />
          <Post
      title={PostsData[4].title}
      content={PostsData[4].content}
      author={UsersData[4].name}
      avatar={UsersData[4].avatar_url}
      createdAt={PostsData[4].created_at.toString()}
      />
  </div>
  );
}


export default App;
