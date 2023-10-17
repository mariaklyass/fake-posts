import React, { useState } from "react";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

const PostForm = ({ create }) => {
  const [entry, setEntry] = useState({ title: "", body: "" });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...entry,
      id: Date.now(),
    };
    create(newPost);
    setEntry({ title: "", body: "" });
  };

  return (
    <form className="bg-stone-200 grid gap-2 p-4">
      <MyInput
        type="text"
        placeholder="post title"
        value={entry.title}
        onChange={(e) => setEntry({ ...entry, title: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="post description"
        value={entry.body}
        onChange={(e) => setEntry({ ...entry, body: e.target.value })}
      />
      <MyButton onClick={addNewPost}>Make a post</MyButton>
    </form>
  );
};

export default PostForm;
