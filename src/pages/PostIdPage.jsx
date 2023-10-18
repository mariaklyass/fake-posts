import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/MyLoader/MyLoader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostbyId, isLoading, error] = useFetch(async (id) => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchComments, isCommLoading, errorComm] = useFetch(async (id) => {
    const response = await PostService.getCommentsById(params.id);
    setComments(response.data);
  });
  useEffect(() => {
    fetchPostbyId(params.id);
    fetchComments(params.id);
  }, []);
  return (
    <div className="h-screen">
      <h1 className="uppercase text-center font-bold mt-2">
        {" "}
        Post Lorem Ipsum{" "}
      </h1>
      {/* {error && (
        <h2 className="text-stone-100">
          Unfortunately, there was an error.. {error}{" "}
        </h2>
      )} */}
      {isLoading ? (
        <MyLoader />
      ) : (
        <div className="bg-[#946b6f]/10 rounded-md m-2">
          {" "}
          <div className="capitalize text-center font-semibold">
            {post.title}
          </div>
          <div className="text-justify m-2">
            A{post.body}
            {post.body}
            {post.body}
            {post.body}.
          </div>
        </div>
      )}
      <h2 className="font-semibold uppercase m-2">Comments</h2>
      {isLoading ? (
        <MyLoader />
      ) : (
        <div className="m-2 bg-[#946b6f]/10 rounded-md">
          {comments.map((comm) => (
            <div key={comm.id}>
              <h5 className="underline">{comm.email}</h5>
              <div className="mb-2">{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
