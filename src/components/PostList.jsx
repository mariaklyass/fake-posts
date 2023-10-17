import React from "react";
import PostItem from "./PostItem";

export default function PostList({ posts, title, remove }) {
  if (!posts.length) {
    return (
      <h2 className="text-xl text-center p-4 text-stone-200">
        There's nothing here yet..
      </h2>
    );
  }
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-center font-bold text-lg text-teal-900 bg-stone-200 w-64 flex justify-center rounded-md mt-4">
          {title}
        </h1>
      </div>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          // number={index + 1}
          item={post}
          key={post.id}
        />
      ))}
    </div>
  );
}
