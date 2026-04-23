import { useState } from "react";
import { useGetPostByIdQuery, useLazyGetPostByIdQuery } from "./postApi";
import { skipToken } from "@reduxjs/toolkit/query";

export const Post = () => {
  const [value, setValue] = useState<string>("");

  let postId: number | null = parseInt(value.trim());

  if (Number.isNaN(postId)) {
    postId = null;
  }

  const { data, isError, isLoading } = useGetPostByIdQuery(postId ?? skipToken);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input value={value} onChange={handleChangeInput} />
      {data && (
        <div>
          {data.id}, {data.title}
        </div>
      )}
      {isLoading && <p>Loading post...</p>}
      {isError && <p>Something went wrong in loading post !</p>}
    </div>
  );
};

export const LazyPost = () => {
  const [value, setValue] = useState<string>("");

  let postId: number | null = parseInt(value.trim());
  if (Number.isNaN(postId)) postId = null;

  const [fetchPostById, { data, isError, isLoading }] =
    useLazyGetPostByIdQuery();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    if (!postId) return;

    fetchPostById(postId);
  };

  return (
    <div>
      <input
        value={value}
        onChange={handleChangeInput}
        placeholder="Search for a post"
      />
      <button onClick={handleSearch}>Search</button>
      {data && <div>{data.title}</div>}
      {isLoading && <p>Loading post...</p>}
      {isError && <p>Something went wrong in loading post !</p>}
    </div>
  );
};
