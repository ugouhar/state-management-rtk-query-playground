import { useState } from "react";
import { useGetPostByIdQuery } from "./postApi";
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
