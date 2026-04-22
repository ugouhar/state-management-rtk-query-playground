import { useGetPostByIdQuery } from "./postApi";

export const Post = () => {
  const id = 1;
  const { data, isError, isLoading } = useGetPostByIdQuery(id);

  if (isLoading) return <p>Loading post...</p>;
  if (isError) return <p>Something went wrong in loading post !</p>;
  if (!data) return null;

  return (
    <div>
      {data.id}, {data.title}
    </div>
  );
};
