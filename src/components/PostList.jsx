import React from "react";
import PostItem from "./PostItem";
// import { faker } from "@faker-js/faker";

export default function PostList({ posts, title, remove }) {
  // const randomImg = faker.image.urlLoremFlickr({ category: "nature" });
  const randomImg = "https://loremflickr.com/640/480/city?lock=123";
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
      <div className="flex flex-wrap justify-evenly">
        {posts.map((post, index) => (
          <PostItem
            // tooooooooo sloooooow
            // image={
            //   "https://source.unsplash.com/random/?sig=" +
            //   Math.random() * 10 +
            //   "q=5"
            // }
            // awful quality
            // image={
            //   "https://loremflickr.com/320/240?random=" + Math.random() * 10
            // }
            image={randomImg + Math.random() * 1000}
            remove={remove}
            // number={index + 1}
            item={post}
            key={post.id}
          />
        ))}
      </div>
    </div>
  );
}
