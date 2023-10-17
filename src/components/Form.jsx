import React, { useEffect, useMemo, useState } from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostFilter from "./PostFilter";
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/MyButton/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import MyLoader from "./UI/MyLoader/MyLoader";
import { useFetch } from "../hooks/useFetch";
import { getPagesNumber } from "../utils/pages";
import MyPagination from "./UI/MyPagination/MyPagination";

export default function Form() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const allPages = useMemo(() => {
    const pagesArray = [];

    for (let i = 0; i < totalPages; i++) {
      pagesArray.push(i + 1);
    }
    return pagesArray;
  }, [totalPages]);

  const [fetchPosts, isPostsLoading, postError] = useFetch(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesNumber(totalCount, limit));
    console.log(totalCount);
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="bg-stone-800/90 drop-shadow-xl mx-4 p-8 rounded-md flex flex-col justify-center items-center">
      <MyButton onClick={() => setModal(true)}>Create a post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {postError && (
        <h2 className="text-stone-100">
          Unfortunately, there was an error.. ${postError}{" "}
        </h2>
      )}

      {isPostsLoading ? (
        <MyLoader />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Posts's list"
        />
      )}
      <MyPagination allPages={allPages} page={page} changePage={changePage} />
    </div>
  );
}
