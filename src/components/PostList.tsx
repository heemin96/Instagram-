"use client";
import useSWR from "swr";

import React from "react";
import { SimplePost } from "@/model/post";
import PostListCard from "./PostListCard";
import GridSpinner from "./ui/GridSpinner";

function PostList() {
  const { data: posts, isLoading: loading } =
    useSWR<SimplePost[]>("/api/posts");
  console.log(posts);

  return (
    <section>
      {loading && (
        <div className="text-center mt-32">
          <GridSpinner color="red" />
        </div>
      )}
      <ul>
        {posts &&
          posts.map((post, index) => (
            <li key={post.id} className="mb-6">
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
      </ul>
    </section>
  );
}

export default PostList;